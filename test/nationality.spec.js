// This test case should failed since OrangeHRM allows for numeric values on Nationality, on a standard scope, this would be part of it
// This test case should failed since OrangeHRM allows for numeric values on Nationality, on a standard scope, this would be part of it
// This test case should failed since OrangeHRM allows for numeric values on Nationality, on a standard scope, this would be part of it

const { test, expect } = require('@playwright/test');

test('TC-04: Nationality field rejects numeric input', async ({ page }) => {

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

  // Click on Admin in the sidebar
  await page.locator('a:has-text("Admin")').click();

  // Verify user is on the Admin page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

  // Click on Nationalities
  await page.locator('a:has-text("Nationalities")').click();

  // Click the Add button
  await page.locator('button.oxd-button--secondary:has-text("Add")').click();

  // Verify the Add Nationality form is displayed
  await expect(page.locator('h6:has-text("Add Nationality")')).toBeVisible();

  // Click and fill the Name field with a numeric value
  await page.getByRole('textbox').last().click();
  await page.getByRole('textbox').last().fill('12345');

  // Click the Save button
  await page.locator('button[type="submit"]').click();

  // Verify error message is displayed
  await expect(page.locator('.oxd-input-field-error-message')).toBeVisible();
  await expect(page.locator('.oxd-input-field-error-message')).toHaveText('Invalid Values');

});

// This test case should failed since OrangeHRM allows for numeric values on Nationality, on a standard scope, this would be part of it