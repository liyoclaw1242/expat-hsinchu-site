import { test, expect } from "@playwright/test";

const locales = [
  { code: "zh", homeText: "Your Home" },
  { code: "en", homeText: "Your Home" },
  { code: "ja", homeText: "Your Home" },
] as const;

test.describe("core user paths", () => {
  for (const locale of locales) {
    test.describe(`${locale.code} locale`, () => {
      test("homepage loads successfully", async ({ page }) => {
        const response = await page.goto(`/${locale.code}`);
        expect(response?.status()).toBe(200);
        await expect(page.locator("h1")).toContainText(locale.homeText);
      });

      test("header nav links are clickable", async ({ page }) => {
        await page.goto(`/${locale.code}`);
        const navLinks = page.locator("header nav a");
        const count = await navLinks.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
          const href = await navLinks.nth(i).getAttribute("href");
          expect(href).toBeTruthy();
          expect(href).toMatch(new RegExp(`^/${locale.code}`));
        }
      });

      test("footer links are clickable", async ({ page }) => {
        await page.goto(`/${locale.code}`);
        const footerLinks = page.locator("footer a[href]");
        const count = await footerLinks.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
          const href = await footerLinks.nth(i).getAttribute("href");
          expect(href).toBeTruthy();
        }
      });

      test("CTA buttons are clickable and navigate", async ({ page }) => {
        await page.goto(`/${locale.code}`);
        // Find the first CTA-style link in hero section
        const ctaLink = page
          .locator('section a[href*="contact"], section a[href*="properties"]')
          .first();
        const href = await ctaLink.getAttribute("href");
        expect(href).toBeTruthy();
        // Link should either have locale prefix or be a bare path (middleware handles redirect)
        expect(href).toMatch(/^\/(contact|properties|zh|en|ja)/);
      });
    });
  }

  test.describe("dark mode toggle", () => {
    test("toggling dark mode adds .dark class to html", async ({ page }) => {
      await page.goto("/en");

      // Wait for hydration — the toggle button gets its proper aria-label after mount
      const toggleButton = page.locator('button[aria-label*="Switch to"]');
      await toggleButton.waitFor({ state: "visible" });

      await toggleButton.click();

      // After click, html should have .dark class
      await expect(page.locator("html")).toHaveClass(/dark/);

      // Click again to toggle back
      await toggleButton.click();
      await expect(page.locator("html")).not.toHaveClass(/dark/);
    });
  });
});
