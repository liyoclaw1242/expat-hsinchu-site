# Verify Report: Verify fixes from audit round 1 (#5-#9)

- **Issue**: liyoclaw1242/expat-hsinchu-site#10
- **Verifier**: qa-20260404-0256274
- **Date**: 2026-04-04
- **Verdict**: FAIL

## Status of Dependencies

| Issue | Title | Status | PR |
|-------|-------|--------|----|
| #5 | Header dark mode | OPEN | PR #11 (not merged) |
| #6 | Dynamic html lang | OPEN | PR #12 (not merged) |
| #7 | Locale prefix links | OPEN | No PR |
| #8 | SEO fixes | OPEN | No PR |
| #9 | Dark mode polish | OPEN | No PR |

**None of the 5 dependency issues are closed.** PRs exist for #5 and #6 but are not merged. Issues #7, #8, #9 have no PRs.

## Results

| Step | Description | Result | Notes |
|------|-------------|--------|-------|
| 5-1 | Nav links visible in dark mode | FAIL | `Header.tsx:81` hardcoded `#374151` |
| 5-2 | Hamburger icon visible in dark mode | FAIL | `Header.tsx:135` hardcoded `#374151` |
| 5-3 | Language switcher visible in dark mode | FAIL | `Header.tsx:98` hardcoded colors |
| 5-4 | Hover states in both modes | FAIL | `Header.tsx:80` light-only Tailwind hover classes |
| 6-1 | /en has lang=en | FAIL | `layout.tsx:93` hardcoded `zh-TW` |
| 6-2 | /ja has lang=ja | FAIL | Same hardcoded `zh-TW` |
| 6-3 | /zh has lang=zh-TW | PASS | Correct (by coincidence) |
| 7-1 | No internal 302 redirects | FAIL | 10+ unlocalized links found |
| 7-2 | zh switcher goes to /zh | FAIL | Links to `/` not `/zh` |
| 7-3 | Footer links have locale prefix | FAIL | zh: all 5 missing; en/ja: `/blog` missing |
| 7-4 | CTA buttons have locale prefix | FAIL | zh/en/ja pages all have bare `/contact`, `/properties` |
| 8-1 | All 3 locales have hreflang alternates | PARTIAL | zh page missing hreflang; en/ja have it |
| 8-2 | Sitemap has no redirect URLs | FAIL | 7 URLs lack locale prefix |
| 8-3 | OG image URL is absolute | FAIL | `layout.tsx:53` uses relative `/og-image.png` |
| 8-4 | No duplicate robots.txt | FAIL | `app/robots.ts` + `public/robots.txt` + `next-sitemap generateRobotsTxt` |
| 9-1 | Process borders in dark mode | PASS | Uses CSS variables correctly |
| 9-2 | Trust bar color consistent | FAIL | zh uses `#3d7870`, en/ja use `#4a938d` |
| 9-3 | Card hover in dark mode | PASS | oklch shadow works in both modes |

**Summary: 3 PASS, 1 PARTIAL, 14 FAIL**

## Failures Detail

### 5-1 to 5-4: Header dark mode (blocked — PR #11 not merged)

PR #11 (`agent/fe-20260403-1547431/issue-5`) correctly replaces all hardcoded hex colors with CSS variables. Code review of the diff shows it addresses all 4 checklist items. **Needs merge to unblock.**

### 6-1 to 6-2: HTML lang attribute (blocked — PR #12 not merged)

PR #12 (`agent/fe-20260404-0253599/issue-6`) adds `x-locale` header forwarding from middleware and reads it in layout to set `<html lang>` dynamically. Code review of the diff shows it correctly maps `zh→zh-TW`, `en→en`, `ja→ja`. **Needs merge to unblock.**

### 7-1 to 7-4: Locale prefix links (no PR exists)

**10+ unlocalized internal links** that cause 302 redirects through middleware:

**Header.tsx:**
- Line 92: zh language switcher `href="/"` → should be `/zh`
- Line 121: zh CTA `href="/contact"` → should be `/zh/contact`
- Line 159: mobile zh switcher `href="/"` → should be `/zh`
- Line 165: mobile zh CTA `href="/contact"` → should be `/zh/contact`

**Footer.tsx:**
- Lines 37-41: all zh nav links missing `/zh` prefix
- Line 48: en blog link `/blog` → should be `/en/blog`
- Line 53: ja blog link `/blog` → should be `/ja/blog`
- Line 12: zh logo href is `/` → should be `/zh`

**zh/page.tsx:**
- Lines 168, 176: hero CTAs `/contact`, `/properties` → need `/zh` prefix
- Lines 88-100: blog hrefs missing `/zh` prefix
- Lines 332, 408, 409: bottom CTAs missing `/zh` prefix

**en/page.tsx:**
- Lines 74, 77: hero CTAs `/contact`, `/properties` → need `/en` prefix

**ja/page.tsx:**
- Lines 73, 76: hero CTAs `/contact`, `/properties` → need `/ja` prefix

**Severity**: Major — every unlocalized link causes a 302 redirect, hurting SEO and UX.
**Triage**: → FE

### 8-1: zh page missing hreflang alternates

`app/zh/page.tsx:19` has only `alternates: { canonical: "https://www.easyrents.xyz" }` — missing `languages` block that en and ja pages have.

**Triage**: → FE

### 8-2: Sitemap contains redirect URLs

`app/sitemap.ts` lines 37-79 include 7 URLs without locale prefix:
- `/services`, `/properties`, `/about`, `/contact`, `/blog`, `/blog/hsinchu-expat-housing-guide`, `/blog/zhubei-expat-apartments`, `/blog/asml-employee-housing-hsinchu`

All will 302 redirect. Also missing: `/zh` root, `/ja/services`, `/ja/properties`, `/ja/about`, `/ja/contact`.

**Triage**: → FE

### 8-3: OG image URL is relative

`app/layout.tsx:53` — `url: "/og-image.png"` should be `url: "https://www.easyrents.xyz/og-image.png"`.

**Triage**: → FE

### 8-4: Duplicate robots.txt sources

Three sources exist:
1. `app/robots.ts` — Next.js dynamic route
2. `public/robots.txt` — static file (takes lower priority but still present)
3. `next-sitemap.config.js` with `generateRobotsTxt: true` — generates at build time

Should keep only ONE source. Recommend: keep `app/robots.ts`, delete `public/robots.txt`, set `generateRobotsTxt: false` in next-sitemap config.

**Triage**: → FE

### 9-2: Trust bar heading color inconsistent

- `zh/page.tsx:205`: `color: "#3d7870"` (darker)
- `en/page.tsx:97`: `color: "#4a938d"` (lighter)
- `ja/page.tsx:95`: `color: "#4a938d"` (lighter)

All three should use the same value, ideally a CSS variable for dark mode support.

**Triage**: → FE

## Triage Assessment

All failures route to **FE**:
- #5 and #6 have PRs ready — just need ARCH to merge PRs #11 and #12
- #7, #8, #9 need new FE work — locale prefix links, SEO metadata, and trust bar color consistency

## Summary

0 of 5 dependency issues are resolved on main. PRs #11 and #12 address issues #5 and #6 respectively and look correct from code review, but are not merged. Issues #7, #8, and #9 have no PRs and significant work remains — particularly #7 (locale prefix links) which has 10+ broken links across Header, Footer, and all three locale pages.
