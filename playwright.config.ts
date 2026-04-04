import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3456",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 13"], viewport: { width: 375, height: 812 } },
    },
    {
      name: "Tablet",
      use: { viewport: { width: 768, height: 1024 }, deviceScaleFactor: 2 },
    },
  ],
  webServer: {
    command: "npm run dev -- --port 3456",
    url: "http://localhost:3456",
    reuseExistingServer: !process.env.CI,
  },
});
