const { test, expect } = require('@playwright/test');

test('TC-01: Valid sign in redirects to dashboard', async ({ page }) => {
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
  // Verify user is on the dashboard URL
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  // Verify "My Info" is visible in the sidebar
  await expect(page.locator('a:has-text("My Info")')).toBeVisible();
});


test('TC-02: Wrong password shows invalid credentials error', async ({ page }) => {
  // Go to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  // Click and fill the Username field
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('Admin');
  // Click and fill the Password field with wrong password
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');
  // Click the Login button
  await page.locator('button[type="submit"]').click();
  // Verify the error message is visible
  await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
  // Verify the error message text is correct
  await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
  // Verify user is still on the login page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});



test('TC-03: Sign out redirects to login page', async ({ page }) => {

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

  // Click the user dropdown menu
  await page.locator('.oxd-userdropdown-tab').click();

  // Click Logout
  await page.locator('a:has-text("Logout")').click();

  // Verify user is back on the login page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Verify the Login button is visible
  await expect(page.locator('button[type="submit"]')).toBeVisible();

});