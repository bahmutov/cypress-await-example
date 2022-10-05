const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
      const thenify = require('cypress-thenify')
      const webpackPreprocessor = require('@cypress/webpack-preprocessor')
      const options = webpackPreprocessor.defaultOptions
      options.webpackOptions.module.rules[0].use[0].options.plugins = [
        [thenify, { total_thenify: 'true' }],
      ] // The 'Total' mode is enabled
      on('file:preprocessor', webpackPreprocessor(options))
    },
  },
})
