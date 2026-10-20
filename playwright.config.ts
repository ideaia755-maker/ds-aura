import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  use: {
    baseURL: "http://127.0.0.1:5273",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run dev -- --port 5273 --strictPort",
    url: "http://127.0.0.1:5273",
    reuseExistingServer: true,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
