// playwright.jenkins.cjs
const baseConfig = require('./playwright.config.js');

module.exports = {
  ...baseConfig,
  use: {
    ...baseConfig.use,
    headless: true,
    channel: 'chromium-headless-shell',
    launchOptions: {
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox', 
        '--disable-gl-drawing-for-tests',
        '--disable-gpu'
      ]
    }
  }
};
