# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nationality.spec.js >> TC-04: Nationality field rejects numeric input
- Location: test\nationality.spec.js:7:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.oxd-input-field-error-message')
Expected: "Invalid Values"
Received: "Already exists"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.oxd-input-field-error-message')
    9 × locator resolved to <span data-v-7b563373="" data-v-957b4417="" class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message">Already exists</span>
      - unexpected value "Already exists"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Admin" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: manda user
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add Nationality" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]: Name*
          - textbox [ref=e166]: "12345"
          - generic [ref=e167]: Already exists
        - separator [ref=e168]
        - generic [ref=e169]:
          - paragraph [ref=e170]: "* Required"
          - button "Cancel" [ref=e171] [cursor=pointer]
          - button "Save" [active] [ref=e172] [cursor=pointer]
    - generic [ref=e173]:
      - paragraph [ref=e174]: OrangeHRM OS 5.8
      - paragraph [ref=e175]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e176] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | // This test case should failed since OrangeHRM allows for numeric values on Nationality, on a standard scope, this would be part of it
  2  | // This test case should failed since OrangeHRM allows for numeric values on Nationality, on a standard scope, this would be part of it
  3  | // This test case should failed since OrangeHRM allows for numeric values on Nationality, on a standard scope, this would be part of it
  4  | 
  5  | const { test, expect } = require('@playwright/test');
  6  | 
  7  | test('TC-04: Nationality field rejects numeric input', async ({ page }) => {
  8  | 
  9  |   // Go to the login page
  10 |   await page.goto('https://opensource-demo.orangehrmlive.com/');
  11 | 
  12 |   // Click and fill the Username field
  13 |   await page.locator('input[name="username"]').click();
  14 |   await page.locator('input[name="username"]').fill('Admin');
  15 | 
  16 |   // Click and fill the Password field
  17 |   await page.locator('input[name="password"]').click();
  18 |   await page.locator('input[name="password"]').fill('admin123');
  19 | 
  20 |   // Click the Login button
  21 |   await page.locator('button[type="submit"]').click();
  22 | 
  23 |   // Click on Admin in the sidebar
  24 |   await page.locator('a:has-text("Admin")').click();
  25 | 
  26 |   // Verify user is on the Admin page
  27 |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  28 | 
  29 |   // Click on Nationalities
  30 |   await page.locator('a:has-text("Nationalities")').click();
  31 | 
  32 |   // Click the Add button
  33 |   await page.locator('button.oxd-button--secondary:has-text("Add")').click();
  34 | 
  35 |   // Verify the Add Nationality form is displayed
  36 |   await expect(page.locator('h6:has-text("Add Nationality")')).toBeVisible();
  37 | 
  38 |   // Click and fill the Name field with a numeric value
  39 |   await page.getByRole('textbox').last().click();
  40 |   await page.getByRole('textbox').last().fill('12345');
  41 | 
  42 |   // Click the Save button
  43 |   await page.locator('button[type="submit"]').click();
  44 | 
  45 |   // Verify error message is displayed
  46 |   await expect(page.locator('.oxd-input-field-error-message')).toBeVisible();
> 47 |   await expect(page.locator('.oxd-input-field-error-message')).toHaveText('Invalid Values');
     |                                                                ^ Error: expect(locator).toHaveText(expected) failed
  48 | 
  49 | });
  50 | 
  51 | // This test case should failed since OrangeHRM allows for numeric values on Nationality, on a standard scope, this would be part of it
```