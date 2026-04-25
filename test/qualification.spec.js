const { test, expect } = require('@playwright/test');

test('TC-05: Add and delete a qualification restores environment state', async ({ page }) => {

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

  // Click Qualifications to reveal the dropdown
  await page.locator('span.oxd-topbar-body-nav-tab-item:has-text("Qualifications")').click();

  // Wait for dropdown to be visible before clicking Education
  await page.locator('a:has-text("Education")').waitFor({ state: 'visible' });
  await page.locator('a:has-text("Education")').click();

  // Verify user is on the Education page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewEducation');

  // Click the Add button
  await page.locator('button.oxd-button--secondary:has-text("Add")').click();

  // Verify the Add Education form is displayed
  await expect(page.locator('h6:has-text("Add Education")')).toBeVisible();

  // Click and fill the Name field
  await page.getByRole('textbox').last().click();
  await page.getByRole('textbox').last().fill('This is a Test');

  // Click the Save button
  await page.locator('button[type="submit"]').click();

  // Verify user is back on the Education list page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewEducation');

 // Locate the newly added entry and click its delete icon
 const row = page.locator('.oxd-table-row', { hasText: 'This is a Test' });await row.locator('button:has(.bi-trash)').click();
 
 // Verify the confirmation dialog appears
 await expect(page.locator('.oxd-dialog-container-default')).toBeVisible({ timeout: 3000 });
 await expect(page.locator('p.oxd-text--card-title')).toBeVisible({ timeout: 3000 });
 
 // Click the confirm Delete button
 await page.getByRole('button', { name: 'Yes, Delete' }).click();
 
 // Verify "This is a Test" is no longer visible in the list
 await expect(page.locator('.oxd-table-row', { hasText: 'This is a Test' })).not.toBeVisible();

});