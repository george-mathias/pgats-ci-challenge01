// playwright.jenkins.js
const baseConfig = require('./playwright.config.js');

module.exports = {
  ...baseConfig,
  use: {
    ...baseConfig.use,
    headless: true,
    launchOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gl-drawing-for-tests']
    }
  }
};
