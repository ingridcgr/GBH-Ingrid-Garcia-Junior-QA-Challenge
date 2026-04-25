const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './test',
  use: {
    headless: false,
    baseURL: 'https://opensource-demo.orangehrmlive.com',
  },
});