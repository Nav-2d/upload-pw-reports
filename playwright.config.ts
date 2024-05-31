import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,

  workers: 1,

  reporter: process.env.CI ? [["list"], ["blob"]] : [["list"]],

  use: {
    trace: "on",
    screenshot: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
