const { test, expect } = require('@playwright/test');

test('TC-07: Date of Birth rejects alphabetical input', async ({ page }) => {

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

  // Click on My Info in the sidebar
  await page.locator('span.oxd-main-menu-item--name:has-text("My Info")').click();

  // Verify user is on the My Info page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');

  // Click the Date of Birth field (second yyyy-dd-mm field on the page)
  await page.locator('input[placeholder="yyyy-dd-mm"]').nth(1).click();
  await page.locator('input[placeholder="yyyy-dd-mm"]').nth(1).selectText();
  await page.keyboard.press('Delete');

  // Type alphabetical characters into the Date of Birth field
  await page.locator('input[placeholder="yyyy-dd-mm"]').nth(1).fill('abcd');

  // Click somewhere else to trigger validation
  await page.locator('input[placeholder="yyyy-dd-mm"]').nth(1).blur();

  // Verify the error message is displayed
  await expect(page.locator('.oxd-input-field-error-message')).toBeVisible();
  await expect(page.locator('.oxd-input-field-error-message')).toHaveText('Should be a valid date in yyyy-dd-mm format');

  // --- Extra mile ---

  // Click Save
  await page.locator('button[type="submit"]').first().click();

  // Verify user has NOT been redirected — still on My Info page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');

});