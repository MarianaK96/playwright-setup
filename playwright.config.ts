import { defineConfig } from "@playwright/test";

require("dotenv").config();

export default defineConfig({
  testDir: "./tests",
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Run tests in files in parallel */
  fullyParallel: true,

  use: {
    baseURL: "https://en.wikipedia.org",
    // run traces on the first retry of a failed test
    trace: "on-first-retry",
  },

  projects: [
    // this matches all tests ending with .setup.ts
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    // this project depends on the setup project and matches all tests ending with loggedin.spec.ts
    {
      name: "e2e tests logged in",
      testMatch: "**/*loggedin.spec.ts",
      // dependencies: ["setup"],
      use: {
        storageState: "playwright/.auth/user.json",
      },
    },
  ],
});
