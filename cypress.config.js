const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.mywebsite.com/",

    pageLoadTimeout: 30000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
