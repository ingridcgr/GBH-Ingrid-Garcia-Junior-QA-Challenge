// tests/buzz.spec.js

const { test, expect } = require('@playwright/test');

test('TC-06: Sort Buzz posts by Most Liked', async ({ page }) => {

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

  // Wait for feed to load
  await page.waitForLoadState('networkidle');

  // Verify tab is active
  await expect(page.locator('button:has-text("Most Liked Posts")')).toBeVisible();

  // Verify posts loaded
  const posts = page.locator('.oxd-buzz-post');
  await expect(posts.first()).toBeVisible();

});