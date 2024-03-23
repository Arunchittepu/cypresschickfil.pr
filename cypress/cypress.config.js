const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.chick-fil-astage.pr/',
   // baseUrl: 'https://www.chick-fil-a.pr',
    
    indeedUrl: 'https://www.indeed.com/cmp',
    comUrl: 'https://www.chick-fil-a.com'
    //watchForFileChanges: false
  },
  
  
});
