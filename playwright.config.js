const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './test',
  use: {
    headless: true,
    baseURL: 'https://opensource-demo.orangehrmlive.com',
  },
});