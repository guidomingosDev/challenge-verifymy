const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern:'**/*.cy.js',
    video:false,
    screenshotsFolder:false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
