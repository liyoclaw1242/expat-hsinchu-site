#!/usr/bin/env bash
# Daily SEO monitor — easyrents.xyz vs easyrent.site
set -euo pipefail

DATE=$(date +"%Y-%m-%d")
YESTERDAY=$(date -v-1d +"%Y-%m-%d" 2>/dev/null || date -d "yesterday" +"%Y-%m-%d")
WEEK_AGO=$(date -v-7d +"%Y-%m-%d" 2>/dev/null || date -d "7 days ago" +"%Y-%m-%d")
LOG_DIR="$HOME/Projects/expat-hsinchu-site/seo-logs"
mkdir -p "$LOG_DIR"

our_status=$(curl -s -o /dev/null -w "%{http_code}" "https://www.easyrents.xyz" 2>/dev/null)
comp_status=$(curl -s -o /dev/null -w "%{http_code}" "https://www.easyrent.site" 2>/dev/null)
sitemap_status=$(curl -s -o /dev/null -w "%{http_code}" "https://www.easyrents.xyz/sitemap.xml" 2>/dev/null)

python3 - "$DATE" "$YESTERDAY" "$WEEK_AGO" "$our_status" "$comp_status" "$sitemap_status" "$LOG_DIR" << 'PYEOF'
import sys, os, json
from datetime import datetime
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

date, yesterday, week_ago, our_status, comp_status, sitemap_status, log_dir = sys.argv[1:]

TOKEN_FILE = os.path.expanduser("~/.openclaw/gsc-token.json")
CREDS_FILE = os.path.expanduser("~/Downloads/client_secret_820383580388-j0odjar19ujh8ftticpqtgn8rr3se7s8.apps.googleusercontent.com.json")

with open(TOKEN_FILE) as f:
    token_data = json.load(f)
with open(CREDS_FILE) as f:
    client_data = json.load(f)["installed"]

creds = Credentials(
    token=token_data.get("token"),
    refresh_token=token_data.get("refresh_token"),
    token_uri=client_data["token_uri"],
    client_id=client_data["client_id"],
    client_secret=client_data["client_secret"],
    scopes=token_data.get("scopes"),
)

# Refresh token if expired
if creds.expired and creds.refresh_token:
    creds.refresh(Request())
    with open(TOKEN_FILE, "w") as f:
        f.write(creds.to_json())

service = build("searchconsole", "v1", credentials=creds)

# --- Performance data (last 7 days) ---
gsc_data = {"keywords": [], "totals": {}, "pages": []}
try:
    # Top keywords
    resp = service.searchanalytics().query(
        siteUrl="https://www.easyrents.xyz/",
        body={
            "startDate": week_ago,
            "endDate": yesterday,
            "dimensions": ["query"],
            "rowLimit": 10,
        }
    ).execute()
    gsc_data["keywords"] = [
        {"keyword": r["keys"][0], "clicks": r["clicks"],
         "impressions": r["impressions"], "ctr": round(r["ctr"]*100, 1),
         "position": round(r["position"], 1)}
        for r in resp.get("rows", [])
    ]

    # Totals
    resp2 = service.searchanalytics().query(
        siteUrl="https://www.easyrents.xyz/",
        body={"startDate": week_ago, "endDate": yesterday, "dimensions": []}
    ).execute()
    rows2 = resp2.get("rows", [{}])
    if rows2:
        gsc_data["totals"] = {
            "clicks": int(rows2[0].get("clicks", 0)),
            "impressions": int(rows2[0].get("impressions", 0)),
            "avg_ctr": round(rows2[0].get("ctr", 0)*100, 1),
            "avg_position": round(rows2[0].get("position", 0), 1),
        }

    # Top pages
    resp3 = service.searchanalytics().query(
        siteUrl="https://www.easyrents.xyz/",
        body={"startDate": week_ago, "endDate": yesterday, "dimensions": ["page"], "rowLimit": 5}
    ).execute()
    gsc_data["pages"] = [
        {"page": r["keys"][0].replace("https://www.easyrents.xyz", ""),
         "clicks": r["clicks"], "impressions": r["impressions"]}
        for r in resp3.get("rows", [])
    ]
except Exception as e:
    gsc_data["error"] = str(e)

# --- Save report ---
report = {
    "date": date,
    "our_site": {"http_status": our_status, "sitemap_status": sitemap_status},
    "competitor": {"http_status": comp_status},
    "gsc": gsc_data,
}
with open(f"{log_dir}/{date}.json", "w") as f:
    json.dump(report, f, ensure_ascii=False, indent=2)

# --- Build notification message ---
totals = gsc_data.get("totals", {})
has_data = totals.get("impressions", 0) > 0

if has_data:
    msg = (
        f"📊 SEO 日報 {date}\n"
        f"📈 過去 7 天 | 曝光 {totals['impressions']} | 點擊 {totals['clicks']} | "
        f"平均排名 {totals['avg_position']}\n"
    )
    if gsc_data["keywords"]:
        msg += "🔑 Top 關鍵字：\n"
        for kw in gsc_data["keywords"][:5]:
            msg += f"  #{round(kw['position'])} {kw['keyword']} — {int(kw['impressions'])} 曝光\n"
else:
    msg = (
        f"📊 SEO 日報 {date} | "
        f"easyrents.xyz {our_status} ✅ sitemap {sitemap_status} | "
        f"easyrent.site {comp_status} | "
        f"GSC 待收錄（剛上線正常）"
    )

import subprocess
subprocess.run(["openclaw", "system", "event", "--text", msg.strip(), "--mode", "now"], capture_output=True)
print(msg)
PYEOF
