// tests/buzz.spec.js

const { test, expect } = require('@playwright/test');

test('TC-06: Share most-liked post from Buzz feed', async ({ page }) => {

  // Go to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Click and fill the Username field
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('Admin');

  // Click and fill the Password field
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('admin123');

  // Click the Login button
  await page.locator('button[type="submit"]').click();

  // Verify user is on the dashboard
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Click on Buzz in the sidebar
  await page.locator('a[href="/web/index.php/buzz/viewBuzz"]').click();

  // Verify user is on the Buzz page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz');

  // Click on Most Liked Posts tab
  await page.locator('button:has-text("Most Liked Posts")').click();

  // Click the share icon on the first post
  await page.locator('.oxd-icon.bi-share-fill').first().click();

  // Verify the share popup is displayed
  await expect(page.locator('.orangehrm-buzz-share-post')).toBeVisible();

  // Click the Share button inside the popup
  await page.locator('.orangehrm-buzz-share-post button:has-text("Share")').click();

  // Verify success toast message is displayed
  await expect(page.locator('.oxd-toast--success')).toBeVisible();

});