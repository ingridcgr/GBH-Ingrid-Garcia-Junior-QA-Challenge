# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: buzz.spec.js >> TC-06: Share most-liked post from Buzz feed
- Location: test\buzz.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.orangehrm-buzz-share-post')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.orangehrm-buzz-share-post')

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
          - heading "Buzz" [level=6] [ref=e114]
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
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e138]:
        - generic [ref=e139]:
          - paragraph [ref=e140]: Buzz Newsfeed
          - generic [ref=e141]:
            - generic [ref=e142]:
              - img "profile picture" [ref=e144]
              - generic [ref=e147]:
                - textbox "What's on your mind?" [ref=e148]
                - button "Post" [ref=e150] [cursor=pointer]
            - separator [ref=e151]
            - generic [ref=e152]:
              - button "Share Photos" [ref=e153] [cursor=pointer]: Share Photos
              - button "Share Video" [ref=e155] [cursor=pointer]: Share Video
          - generic [ref=e157]:
            - button " Most Recent Posts" [ref=e158] [cursor=pointer]:
              - generic [ref=e159]: 
              - text: Most Recent Posts
            - button " Most Liked Posts" [ref=e160] [cursor=pointer]:
              - generic [ref=e161]: 
              - text: Most Liked Posts
            - button " Most Commented Posts" [ref=e162] [cursor=pointer]:
              - generic [ref=e163]: 
              - text: Most Commented Posts
          - generic [ref=e164]:
            - generic [ref=e166]:
              - generic [ref=e167]:
                - generic [ref=e168]:
                  - generic [ref=e169]:
                    - img "profile picture" [ref=e171]
                    - generic [ref=e172]:
                      - paragraph [ref=e173]: Russel Hamilton
                      - paragraph [ref=e174]: 2020-07-10 11:33 PM
                  - listitem [ref=e176]:
                    - button "" [ref=e177] [cursor=pointer]:
                      - generic [ref=e178]: 
                - separator [ref=e179]
              - paragraph [ref=e182]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
              - generic [ref=e183]:
                - generic [ref=e184]:
                  - img [ref=e186] [cursor=pointer]
                  - button "" [ref=e211] [cursor=pointer]:
                    - generic [ref=e212]: 
                  - button "" [active] [ref=e213] [cursor=pointer]:
                    - generic [ref=e214]: 
                - generic [ref=e215]:
                  - generic [ref=e216]:
                    - generic [ref=e217]: 
                    - paragraph [ref=e218] [cursor=pointer]: 2 Likes
                  - generic [ref=e219]:
                    - paragraph [ref=e220] [cursor=pointer]: 0 Comments
                    - text: ‚
                    - paragraph [ref=e221]: 0 Shares
            - generic [ref=e223]:
              - generic [ref=e224]:
                - generic [ref=e225]:
                  - generic [ref=e226]:
                    - img "profile picture" [ref=e228]
                    - generic [ref=e229]:
                      - paragraph [ref=e230]: Sania Shaheen
                      - paragraph [ref=e231]: 2020-07-10 11:38 PM
                  - listitem [ref=e233]:
                    - button "" [ref=e234] [cursor=pointer]:
                      - generic [ref=e235]: 
                - separator [ref=e236]
              - generic [ref=e238]:
                - paragraph [ref=e239]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
                - paragraph [ref=e240] [cursor=pointer]: Read More
              - generic [ref=e241]:
                - generic [ref=e242]:
                  - img [ref=e244] [cursor=pointer]
                  - button "" [ref=e247] [cursor=pointer]:
                    - generic [ref=e248]: 
                  - button "" [ref=e249] [cursor=pointer]:
                    - generic [ref=e250]: 
                - generic [ref=e251]:
                  - generic [ref=e252]:
                    - generic [ref=e253]: 
                    - paragraph [ref=e254] [cursor=pointer]: 1 Like
                  - generic [ref=e255]:
                    - paragraph [ref=e256] [cursor=pointer]: 0 Comments
                    - text: ‚
                    - paragraph [ref=e257]: 0 Shares
            - generic [ref=e259]:
              - generic [ref=e260]:
                - generic [ref=e261]:
                  - generic [ref=e262]:
                    - img "profile picture" [ref=e264]
                    - generic [ref=e265]:
                      - paragraph [ref=e266]: manda Silva user
                      - paragraph [ref=e267]: 2020-07-10 11:38 PM
                  - listitem [ref=e269]:
                    - button "" [ref=e270] [cursor=pointer]:
                      - generic [ref=e271]: 
                - separator [ref=e272]
              - paragraph [ref=e275]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
              - generic [ref=e276]:
                - generic [ref=e277]:
                  - img [ref=e279] [cursor=pointer]
                  - button "" [ref=e282] [cursor=pointer]:
                    - generic [ref=e283]: 
                  - button "" [ref=e284] [cursor=pointer]:
                    - generic [ref=e285]: 
                - generic [ref=e286]:
                  - generic [ref=e287]:
                    - generic [ref=e288]: 
                    - paragraph [ref=e289] [cursor=pointer]: 1 Like
                  - generic [ref=e290]:
                    - paragraph [ref=e291] [cursor=pointer]: 1 Comment
                    - text: ‚
                    - paragraph [ref=e292]: 0 Shares
            - generic [ref=e294]:
              - generic [ref=e295]:
                - generic [ref=e296]:
                  - generic [ref=e297]:
                    - img "profile picture" [ref=e299]
                    - generic [ref=e300]:
                      - paragraph [ref=e301]: manda Silva user
                      - paragraph [ref=e302]: 2026-25-04 01:18 PM
                  - listitem [ref=e304]:
                    - button "" [ref=e305] [cursor=pointer]:
                      - generic [ref=e306]: 
                - separator [ref=e307]
              - img [ref=e313]
              - generic [ref=e314]:
                - generic [ref=e315]:
                  - img [ref=e317] [cursor=pointer]
                  - button "" [ref=e320] [cursor=pointer]:
                    - generic [ref=e321]: 
                  - button "" [ref=e322] [cursor=pointer]:
                    - generic [ref=e323]: 
                - generic [ref=e324]:
                  - generic [ref=e325]:
                    - generic [ref=e326]: 
                    - paragraph [ref=e327] [cursor=pointer]: 1 Like
                  - generic [ref=e328]:
                    - paragraph [ref=e329] [cursor=pointer]: 0 Comments
                    - text: ‚
                    - paragraph [ref=e330]: 0 Shares
            - generic [ref=e332]:
              - generic [ref=e333]:
                - generic [ref=e334]:
                  - generic [ref=e335]:
                    - img "profile picture" [ref=e337]
                    - generic [ref=e338]:
                      - paragraph [ref=e339]: Rebecca Harmony
                      - paragraph [ref=e340]: 2020-07-10 11:34 PM
                  - listitem [ref=e342]:
                    - button "" [ref=e343] [cursor=pointer]:
                      - generic [ref=e344]: 
                - separator [ref=e345]
              - generic [ref=e347]:
                - paragraph [ref=e348]: Throwback Thursdays!!
                - img [ref=e352]
              - generic [ref=e353]:
                - generic [ref=e354]:
                  - img [ref=e356] [cursor=pointer]
                  - button "" [ref=e381] [cursor=pointer]:
                    - generic [ref=e382]: 
                  - button "" [ref=e383] [cursor=pointer]:
                    - generic [ref=e384]: 
                - generic [ref=e385]:
                  - generic [ref=e386]:
                    - generic [ref=e387]: 
                    - paragraph [ref=e388]: 0 Likes
                  - generic [ref=e389]:
                    - paragraph [ref=e390] [cursor=pointer]: 0 Comments
                    - text: ‚
                    - paragraph [ref=e391]: 0 Shares
            - generic [ref=e393]:
              - generic [ref=e394]:
                - generic [ref=e395]:
                  - generic [ref=e396]:
                    - img "profile picture" [ref=e398]
                    - generic [ref=e399]:
                      - paragraph [ref=e400]: manda Silva user
                      - paragraph [ref=e401]: 2026-25-04 01:18 PM
                  - listitem [ref=e403]:
                    - button "" [ref=e404] [cursor=pointer]:
                      - generic [ref=e405]: 
                - separator [ref=e406]
              - img [ref=e412]
              - generic [ref=e413]:
                - generic [ref=e414]:
                  - img [ref=e416] [cursor=pointer]
                  - button "" [ref=e419] [cursor=pointer]:
                    - generic [ref=e420]: 
                  - button "" [ref=e421] [cursor=pointer]:
                    - generic [ref=e422]: 
                - generic [ref=e423]:
                  - generic [ref=e424]:
                    - generic [ref=e425]: 
                    - paragraph [ref=e426] [cursor=pointer]: 1 Like
                  - generic [ref=e427]:
                    - paragraph [ref=e428] [cursor=pointer]: 0 Comments
                    - text: ‚
                    - paragraph [ref=e429]: 0 Shares
            - generic [ref=e431]:
              - generic [ref=e432]:
                - generic [ref=e433]:
                  - generic [ref=e434]:
                    - img "profile picture" [ref=e436]
                    - generic [ref=e437]:
                      - paragraph [ref=e438]: manda Silva user
                      - paragraph [ref=e439]: 2020-07-10 11:38 PM
                  - listitem [ref=e441]:
                    - button "" [ref=e442] [cursor=pointer]:
                      - generic [ref=e443]: 
                - separator [ref=e444]
              - paragraph [ref=e447]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
              - generic [ref=e448]:
                - generic [ref=e449]:
                  - img [ref=e451] [cursor=pointer]
                  - button "" [ref=e454] [cursor=pointer]:
                    - generic [ref=e455]: 
                  - button "" [ref=e456] [cursor=pointer]:
                    - generic [ref=e457]: 
                - generic [ref=e458]:
                  - generic [ref=e459]:
                    - generic [ref=e460]: 
                    - paragraph [ref=e461] [cursor=pointer]: 1 Like
                  - generic [ref=e462]:
                    - paragraph [ref=e463] [cursor=pointer]: 1 Comment
                    - text: ‚
                    - paragraph [ref=e464]: 0 Shares
            - generic [ref=e466]:
              - generic [ref=e467]:
                - generic [ref=e468]:
                  - generic [ref=e469]:
                    - img "profile picture" [ref=e471]
                    - generic [ref=e472]:
                      - paragraph [ref=e473]: Sania Shaheen
                      - paragraph [ref=e474]: 2020-07-10 11:38 PM
                  - listitem [ref=e476]:
                    - button "" [ref=e477] [cursor=pointer]:
                      - generic [ref=e478]: 
                - separator [ref=e479]
              - generic [ref=e481]:
                - paragraph [ref=e482]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
                - paragraph [ref=e483] [cursor=pointer]: Read More
              - generic [ref=e484]:
                - generic [ref=e485]:
                  - img [ref=e487] [cursor=pointer]
                  - button "" [ref=e490] [cursor=pointer]:
                    - generic [ref=e491]: 
                  - button "" [ref=e492] [cursor=pointer]:
                    - generic [ref=e493]: 
                - generic [ref=e494]:
                  - generic [ref=e495]:
                    - generic [ref=e496]: 
                    - paragraph [ref=e497] [cursor=pointer]: 1 Like
                  - generic [ref=e498]:
                    - paragraph [ref=e499] [cursor=pointer]: 0 Comments
                    - text: ‚
                    - paragraph [ref=e500]: 0 Shares
            - generic [ref=e502]:
              - generic [ref=e503]:
                - generic [ref=e504]:
                  - generic [ref=e505]:
                    - img "profile picture" [ref=e507]
                    - generic [ref=e508]:
                      - paragraph [ref=e509]: Rebecca Harmony
                      - paragraph [ref=e510]: 2020-07-10 11:34 PM
                  - listitem [ref=e512]:
                    - button "" [ref=e513] [cursor=pointer]:
                      - generic [ref=e514]: 
                - separator [ref=e515]
              - generic [ref=e517]:
                - paragraph [ref=e518]: Throwback Thursdays!!
                - img [ref=e522]
              - generic [ref=e523]:
                - generic [ref=e524]:
                  - img [ref=e526] [cursor=pointer]
                  - button "" [ref=e551] [cursor=pointer]:
                    - generic [ref=e552]: 
                  - button "" [ref=e553] [cursor=pointer]:
                    - generic [ref=e554]: 
                - generic [ref=e555]:
                  - generic [ref=e556]:
                    - generic [ref=e557]: 
                    - paragraph [ref=e558]: 0 Likes
                  - generic [ref=e559]:
                    - paragraph [ref=e560] [cursor=pointer]: 0 Comments
                    - text: ‚
                    - paragraph [ref=e561]: 0 Shares
            - generic [ref=e563]:
              - generic [ref=e564]:
                - generic [ref=e565]:
                  - generic [ref=e566]:
                    - img "profile picture" [ref=e568]
                    - generic [ref=e569]:
                      - paragraph [ref=e570]: Russel Hamilton
                      - paragraph [ref=e571]: 2020-07-10 11:33 PM
                  - listitem [ref=e573]:
                    - button "" [ref=e574] [cursor=pointer]:
                      - generic [ref=e575]: 
                - separator [ref=e576]
              - paragraph [ref=e579]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
              - generic [ref=e580]:
                - generic [ref=e581]:
                  - img [ref=e583] [cursor=pointer]
                  - button "" [ref=e608] [cursor=pointer]:
                    - generic [ref=e609]: 
                  - button "" [ref=e610] [cursor=pointer]:
                    - generic [ref=e611]: 
                - generic [ref=e612]:
                  - generic [ref=e613]:
                    - generic [ref=e614]: 
                    - paragraph [ref=e615] [cursor=pointer]: 2 Likes
                  - generic [ref=e616]:
                    - paragraph [ref=e617] [cursor=pointer]: 0 Comments
                    - text: ‚
                    - paragraph [ref=e618]: 0 Shares
        - dialog [ref=e619]:
          - document [ref=e622]:
            - button "×" [ref=e623] [cursor=pointer]
            - paragraph [ref=e625]: Share Post
            - separator [ref=e626]
            - generic [ref=e627]:
              - generic [ref=e628]:
                - img "profile picture" [ref=e630]
                - textbox "What's on your mind?" [ref=e633]
              - paragraph [ref=e634]: Russel Hamilton
              - paragraph [ref=e635]: 2020-07-10 11:33 PM
              - paragraph [ref=e636]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
              - button "Share" [ref=e638] [cursor=pointer]
      - generic [ref=e640]:
        - paragraph [ref=e641]: Upcoming Anniversaries
        - generic [ref=e643]:
          - img "No Content" [ref=e644]
          - paragraph [ref=e645]: No Records Found
    - generic [ref=e646]:
      - paragraph [ref=e647]: OrangeHRM OS 5.8
      - paragraph [ref=e648]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e649] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | // tests/buzz.spec.js
  2  | 
  3  | const { test, expect } = require('@playwright/test');
  4  | 
  5  | test('TC-06: Share most-liked post from Buzz feed', async ({ page }) => {
  6  | 
  7  |   // Go to the login page
  8  |   await page.goto('https://opensource-demo.orangehrmlive.com/');
  9  | 
  10 |   // Click and fill the Username field
  11 |   await page.locator('input[name="username"]').click();
  12 |   await page.locator('input[name="username"]').fill('Admin');
  13 | 
  14 |   // Click and fill the Password field
  15 |   await page.locator('input[name="password"]').click();
  16 |   await page.locator('input[name="password"]').fill('admin123');
  17 | 
  18 |   // Click the Login button
  19 |   await page.locator('button[type="submit"]').click();
  20 | 
  21 |   // Verify user is on the dashboard
  22 |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  23 | 
  24 |   // Click on Buzz in the sidebar
  25 |   await page.locator('a[href="/web/index.php/buzz/viewBuzz"]').click();
  26 | 
  27 |   // Verify user is on the Buzz page
  28 |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz');
  29 | 
  30 |   // Click on Most Liked Posts tab
  31 |   await page.locator('button:has-text("Most Liked Posts")').click();
  32 | 
  33 |   // Click the share icon on the first post
  34 |   await page.locator('.oxd-icon.bi-share-fill').first().click();
  35 | 
  36 |   // Verify the share popup is displayed
> 37 |   await expect(page.locator('.orangehrm-buzz-share-post')).toBeVisible();
     |                                                            ^ Error: expect(locator).toBeVisible() failed
  38 | 
  39 |   // Click the Share button inside the popup
  40 |   await page.locator('.orangehrm-buzz-share-post button:has-text("Share")').click();
  41 | 
  42 |   // Verify success toast message is displayed
  43 |   await expect(page.locator('.oxd-toast--success')).toBeVisible();
  44 | 
  45 | });
```