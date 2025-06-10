import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,

  workers: 1,

  reporter: [
      [
        `html`,
        {
          open: `never`,
        },
      ],
    ],

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
