import { test, expect } from "@playwright/test";

test.describe("i18n routing", () => {
  test.describe("locale detection from Accept-Language", () => {
    test("/ with Accept-Language: zh → redirect to /zh", async ({ browser }) => {
      const context = await browser.newContext({ locale: "zh-TW" });
      const page = await context.newPage();
      await page.goto("/");
      expect(page.url()).toContain("/zh");
      await context.close();
    });

    test("/ with Accept-Language: en → redirect to /en", async ({ browser }) => {
      const context = await browser.newContext({ locale: "en-US" });
      const page = await context.newPage();
      await page.goto("/");
      expect(page.url()).toContain("/en");
      await context.close();
    });

    test("/ with Accept-Language: ja → redirect to /ja", async ({ browser }) => {
      const context = await browser.newContext({ locale: "ja-JP" });
      const page = await context.newPage();
      await page.goto("/");
      expect(page.url()).toContain("/ja");
      await context.close();
    });
  });

  test.describe("locale content verification", () => {
    test("/en contains English content", async ({ page }) => {
      await page.goto("/en");
      await expect(page.locator("body")).toContainText("Your Home");
      await expect(page.locator("body")).toContainText("in Hsinchu");
    });

    test("/ja contains Japanese content", async ({ page }) => {
      await page.goto("/ja");
      await expect(page.locator("body")).toContainText("竹科駐在員向け");
    });

    test("/zh contains Chinese content", async ({ page }) => {
      await page.goto("/zh");
      await expect(page.locator("body")).toContainText("竹科外派人員首選");
    });
  });

  test.describe("NEXT_LOCALE cookie", () => {
    test("NEXT_LOCALE cookie is set after visiting /en", async ({ page }) => {
      await page.goto("/en");
      const cookies = await page.context().cookies();
      const localeCookie = cookies.find((c) => c.name === "NEXT_LOCALE");
      expect(localeCookie).toBeDefined();
      expect(localeCookie!.value).toBe("en");
    });

    test("cookie NEXT_LOCALE=en → / redirects to /en", async ({ browser }) => {
      const context = await browser.newContext();
      await context.addCookies([
        { name: "NEXT_LOCALE", value: "en", domain: "localhost", path: "/" },
      ]);
      const page = await context.newPage();
      await page.goto("/");
      expect(page.url()).toContain("/en");
      await context.close();
    });
  });

  test.describe("language switcher", () => {
    test("clicking EN on /zh navigates to /en", async ({ page, isMobile }) => {
      await page.goto("/zh");
      if (isMobile) {
        // Open hamburger menu first
        const menuButton = page.locator('button[aria-label="Toggle menu"]');
        await menuButton.click();
        const enLink = page.locator("header a").filter({ hasText: "English" }).first();
        await enLink.click();
      } else {
        const enLink = page.locator("header a").filter({ hasText: "EN" }).first();
        await enLink.click();
      }
      await page.waitForURL("**/en", { timeout: 10000 });
      expect(page.url()).toContain("/en");
    });
  });

  test.describe("invalid locale", () => {
    test("/fr redirects to default locale", async ({ browser }) => {
      const context = await browser.newContext({ locale: "zh-TW" });
      const page = await context.newPage();
      await page.goto("/fr");
      const url = page.url();
      expect(url).toMatch(/\/(zh|en|ja)/);
      await context.close();
    });
  });
});
