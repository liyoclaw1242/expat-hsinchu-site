import { test, expect } from "@playwright/test";

test.describe("i18n routing", () => {
  test.describe("Accept-Language redirect", () => {
    test("/ with Accept-Language: zh redirects to /zh", async ({ browser }) => {
      const context = await browser.newContext({ locale: "zh-TW" });
      const page = await context.newPage();
      await page.goto("/");
      await expect(page).toHaveURL(/\/zh$/);
      await context.close();
    });

    test("/ with Accept-Language: en redirects to /en", async ({ browser }) => {
      const context = await browser.newContext({ locale: "en-US" });
      const page = await context.newPage();
      await page.goto("/");
      await expect(page).toHaveURL(/\/en$/);
      await context.close();
    });

    test("/ with Accept-Language: ja redirects to /ja", async ({ browser }) => {
      const context = await browser.newContext({ locale: "ja-JP" });
      const page = await context.newPage();
      await page.goto("/");
      await expect(page).toHaveURL(/\/ja$/);
      await context.close();
    });
  });

  test.describe("locale content", () => {
    test("/en contains English content", async ({ page }) => {
      await page.goto("/en");
      await expect(page.locator("h1")).toContainText("Your Home");
      await expect(page.locator("body")).toContainText(
        "Hsinchu Science Park Expat Housing Specialist"
      );
    });

    test("/ja contains Japanese content", async ({ page }) => {
      await page.goto("/ja");
      await expect(page.locator("body")).toContainText("竹科駐在員向け");
    });

    test("/zh contains Chinese content", async ({ page }) => {
      await page.goto("/zh");
      await expect(page.locator("body")).toContainText("竹科外派人員首選租屋代管");
    });
  });

  test.describe("NEXT_LOCALE cookie", () => {
    test("visiting /en sets NEXT_LOCALE cookie to en", async ({ page }) => {
      await page.goto("/en");
      const cookies = await page.context().cookies();
      const localeCookie = cookies.find((c) => c.name === "NEXT_LOCALE");
      expect(localeCookie).toBeDefined();
      expect(localeCookie!.value).toBe("en");
    });

    test("NEXT_LOCALE=en cookie causes / to redirect to /en", async ({
      page,
      context,
    }) => {
      await context.addCookies([
        {
          name: "NEXT_LOCALE",
          value: "en",
          url: "http://localhost:3001",
        },
      ]);
      await page.goto("/");
      await expect(page).toHaveURL(/\/en$/);
    });
  });

  test.describe("language switcher", () => {
    test("clicking EN on /zh navigates to /en", async ({ page, isMobile }) => {
      test.skip(!!isMobile, "Language switcher is desktop-only in this layout");
      await page.goto("/zh");
      // Desktop language switcher — the link with exact text "EN"
      const enLink = page.locator('header a', { hasText: /^EN$/ }).first();
      await enLink.click();
      await expect(page).toHaveURL(/\/en$/);
    });
  });

  test.describe("unknown locale", () => {
    test("/fr redirects to default locale", async ({ page }) => {
      await page.setExtraHTTPHeaders({ "Accept-Language": "zh-TW,zh;q=0.9" });
      const response = await page.goto("/fr");
      // Should redirect — either to /zh/fr (404) or /zh
      const url = page.url();
      expect(url).toMatch(/\/(zh|en|ja)/);
    });
  });
});
