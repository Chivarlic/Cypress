// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

module.exports = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      environment: 'staging',
    },
    reporter:'mochawesome',
    reporteOptions: {
      reportDir: 'cypress/reports/mochawesome/',
      overwrite: false,
      html: false,
      json: true,
  },
  screenshot:true,
  video:true,
  viewportheight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  numTestsKeptInMemory: 1,
  projectId: '',
},
};