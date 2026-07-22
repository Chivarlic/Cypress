const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",

    baseUrl: "https://www.saucedemo.com",

    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,

    retries: {
      runMode: 2,
      openMode: 0
    },

    reporter: "mochawesome",

    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: false,
      json: true,
      charts: true
    },

    screenshot: true,
    video: true,

    viewportHeight: 1080,
    viewportWidth: 1920,

    watchForFileChanges: false,
    numTestsKeptInMemory: 1
  }
});
