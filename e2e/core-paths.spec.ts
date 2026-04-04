import { test, expect } from "@playwright/test";

const locales = ["zh", "en", "ja"] as const;

test.describe("core user paths", () => {
  for (const locale of locales) {
    test.describe(`${locale} locale`, () => {
      test("homepage loads successfully", async ({ page }) => {
        const response = await page.goto(`/${locale}`);
        expect(response?.status()).toBeLessThan(400);
        await expect(page.locator("header")).toBeVisible();
        await expect(page.locator("footer")).toBeVisible();
      });

      test("header nav links are clickable", async ({ page }) => {
        await page.goto(`/${locale}`);
        const navLinks = page.locator("header nav a");
        const count = await navLinks.count();
        expect(count).toBeGreaterThan(0);

        // Verify each nav link has an href
        for (let i = 0; i < count; i++) {
          const href = await navLinks.nth(i).getAttribute("href");
          expect(href).toBeTruthy();
        }
      });

      test("footer links are clickable", async ({ page }) => {
        await page.goto(`/${locale}`);
        const footerLinks = page.locator("footer a");
        const count = await footerLinks.count();
        expect(count).toBeGreaterThan(0);
      });
    });
  }

  test("dark mode toggle works", async ({ page }) => {
    await page.goto("/zh");
    const html = page.locator("html");

    // Find and click the dark mode toggle button
    const themeToggle = page.locator("button").filter({ has: page.locator("svg") }).first();

    // Click until dark class appears (may start in system/light mode)
    const initialHasDark = await html.evaluate((el) => el.classList.contains("dark"));

    // Click the toggle
    await themeToggle.click();
    await page.waitForTimeout(300); // wait for theme transition

    const afterClickHasDark = await html.evaluate((el) => el.classList.contains("dark"));

    // The class should have toggled
    expect(afterClickHasDark).not.toBe(initialHasDark);
  });

  test("CTA button exists and links to contact", async ({ page }) => {
    await page.goto("/en");
    // Find CTA links (Free Consultation or similar)
    const ctaLinks = page.locator('a:has-text("Free Consultation")');
    const count = await ctaLinks.count();
    expect(count).toBeGreaterThan(0);
    // Verify at least one links to contact page
    const href = await ctaLinks.first().getAttribute("href");
    expect(href).toContain("contact");
  });
});
