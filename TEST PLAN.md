Test Plan — QA Automation Challenge
===================================

📌 Overview
-----------

This test plan outlines the approach I used to design and implement automated UI and API tests for this challenge. The goal was to focus on writing clean, reliable, and maintainable tests rather than building a full framework. I selected test cases based on real user impact, validation depth, and risk, ensuring a mix of happy paths, negative scenarios, and edge cases.

The solution covers both UI (OrangeHRM) and API (Disney API) layers, with an emphasis on test independence, meaningful assertions, and practical coverage. Trade-offs were made to balance reliability, execution time, and scope within the constraints of the challenge.

## 👤 About the Author
This project was developed by Ingrid Garcia, a QA engineer with experience in manual and automation testing across web and mobile applications.
The solution reflects a practical, real-world testing approach focused on high-impact coverage, data integrity, and maintainability.

🎯 Scope
--------

**UI — OrangeHRM Demo (`https://opensource-demo.orangehrmlive.com`)**

- Authentication: valid sign in, wrong password, sign out
- Admin panel — Nationality management: input validation when entering a numeric nationality name
- Admin panel — Qualification management: full add and delete cycle for a skill entry
- Buzz module: dynamic interaction with the most-liked post (share action)
- Personal info: Date of Birth field validation against alphabetical input

**API — Disney API (`https://api.disneyapi.dev`)**

- `GET /character` — full character list, response structure, status code, pagination
- `GET /character?films=...` — filter by TV show (Jake and the Never Land Pirates)
- `GET /character?videoGames=...` — filter by video game (Kingdom Hearts III)
- Negative scenarios: invalid endpoints, non-existent IDs, malformed requests, error response structure

### What is out of scope

- OrangeHRM modules not covered by the 7 test cases (Recruitment, Performance, Time, Reports, Leave)
- Cross-browser testing — suite runs on Chromium only (see trade-offs)
- Visual or pixel-level regression testing
- Load, stress, or performance testing
- Mobile viewports or responsive layout testing
- Employee creation and deletion via the PIM module (see trade-offs)
- OrangeHRM system configuration (email settings, locale, permissions)
- Disney API authentication flows (the API is public and unauthenticated)
    

## 📋 Test Cases — Classification & Rationale

This section outlines the selected test cases, their classification, and the reasoning behind each choice.
The goal is to balance **critical coverage, validation depth, and environment safety**.

---

### 🔹 Test Case Table

| ID | Test Case | Module | Type |
|---|---|---|---|
| **TC-01** | Valid sign in redirects to dashboard | Authentication | ✅ Happy Path |
| **TC-02** | Wrong password shows error message | Authentication | ❌ Negative |
| **TC-03** | Sign out redirects to login page | Authentication | ✅ Happy Path |
| **TC-04** | Add nationality as `"1234"` | Admin | ⚠️ Edge Case + Negative |
| **TC-05** | Add and delete a qualification (skill) | Admin | ✅ Happy Path (CRUD) |
| **TC-06** | Share most-liked post from Buzz feed | Buzz | ⚠️ Edge Case |
| **TC-07** | Enter alphabetical input in Date of Birth | Personal Info | ❌ Negative |

---

### 🧾 Rationale per Test Case

**TC-01 — Valid sign in**
Core critical path. All users must authenticate to access the system. Any failure here blocks all functionality — this is the highest-priority test in the suite.

**TC-02 — Wrong password**
Ensures invalid credentials are rejected and that proper error feedback is displayed to the user. Validates the security boundary of the authentication flow.

**TC-03 — Sign out**
Validates session termination and ensures users cannot continue accessing the system after logout. Session management is as critical as session creation.

**TC-04 — Add nationality as `"1234"`**
Validates semantic data integrity. A nationality is alphabetical by definition — no nationality in any language is represented by digits. This tests domain-level validation beyond basic required-field checks.

**TC-05 — Add and delete a qualification (skill)**
Verifies create and delete functionality in a single flow while restoring the environment to its original state. Combining both actions is intentional: it avoids test data pollution on the shared demo environment and eliminates a cross-test dependency.

**TC-06 — Share most-liked post from Buzz feed**
Handles dynamic, non-deterministic UI content — the target post is resolved at runtime based on live like counts, not hardcoded. This demonstrates selector flexibility and covers a module typically deprioritised in automation.

**TC-07 — Alphabetical input in Date of Birth**
Ensures strict type validation for date fields. Alphabetical characters should be rejected at the UI layer to prevent invalid data from being submitted or silently stored.

---

### 🧠 Test Coverage Breakdown

| Category | Test IDs |
|---|---|
| ✅ Happy Path | TC-01, TC-03, TC-05 |
| ❌ Negative | TC-02, TC-04, TC-07 |
| ⚠️ Edge Case | TC-04, TC-06 |

---

### ⚖️ Design Notes

- **TC-04** ensures domain-level validation beyond basic input checks — it tests whether the application understands the *meaning* of the data, not just its presence.
- **TC-05** combines create and delete actions to maintain environment hygiene and avoid test data pollution on a shared demo platform.
- **TC-06** demonstrates handling of dynamic UI elements, which are typically avoided in automation due to instability — including it shows confidence in building resilient selectors.

🔌 API Testing Approach
-----------------------

*   Claude AI used for request design
    
*   Newman used for automation
    
*   Assertions include:
    
    *   Status codes
        
    *   Response structure
        
    *   Edge cases


⚠️ Assumptions
--------------

*   OrangeHRM demo data is stable
    
*   API endpoints remain public and unchanged
    
*   UI behavior may vary slightly due to environment timing
    

💡 Notes
--------

The test suite prioritizes:

*   Real-world usage scenarios
    
*   Data integrity validation
    
*   Maintainability and reliability
