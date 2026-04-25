# GBH-Ingrid-Garcia-Junior-QA-Challenge
# 🧪 OrangeHRM + Disney API Test Automation Project

## 📌 Overview

This project contains an automated test suite built using **Playwright
(JavaScript)** for UI testing and **Postman** for API testing.

It validates: - UI flows on the OrangeHRM demo application\
- API endpoints from the Disney API

The goal is to demonstrate **real-world QA thinking**, including: -
Critical path coverage\
- Semantic input validation\
- Environment-safe execution\
- Proper tool selection per testing layer

------------------------------------------------------------------------

## 🎯 Scope

### ✅ UI Testing --- OrangeHRM Demo

https://opensource-demo.orangehrmlive.com

Covered areas: - Authentication (sign in, sign out, invalid login) -
Admin module: - Nationality validation - Qualification (skill)
lifecycle - Buzz module (dynamic content interaction) - Personal
Information (Date of Birth validation)

------------------------------------------------------------------------

### ✅ API Testing --- Disney API

https://api.disneyapi.dev

Covered endpoints: - GET /character --- list, structure, pagination\
- GET /character?films=... --- filtering\
- GET /character?videoGames=... --- filtering

Negative scenarios: - Invalid endpoints\
- Non-existent IDs\
- Malformed requests

------------------------------------------------------------------------
## 📋 Test Cases --- Classification & Rationale

This section outlines the selected test cases, their classification, and
the reasoning behind each choice.\
The goal is to balance **critical coverage, validation depth, and
environment safety**.

------------------------------------------------------------------------

### 🔹 Test Case Table

  -----------------------------------------------------------------------------------
  ID          Test Case          Module           Type           Rationale
  ----------- ------------------ ---------------- -------------- --------------------
  **TC-01**   Valid sign in      Authentication   **Happy Path** Core critical path.
              redirects to                                       All users must
              dashboard                                          authenticate to
                                                                 access the system.
                                                                 Any failure blocks
                                                                 all functionality.

  **TC-02**   Wrong password     Authentication   **Negative**   Ensures invalid
              shows error                                        credentials are
              message                                            rejected and proper
                                                                 feedback is
                                                                 displayed to the
                                                                 user.

  **TC-03**   Sign out redirects Authentication   **Happy Path** Validates session
              to login page                                      termination and
                                                                 ensures users cannot
                                                                 continue accessing
                                                                 the system after
                                                                 logout.

  **TC-04**   Add nationality as Admin            **Edge Case +  Validates semantic
              "1234"                              Negative**     data integrity. A
                                                                 nationality cannot
                                                                 be numeric, ensuring
                                                                 domain-level
                                                                 validation.

  **TC-05**   Add and delete a   Admin            **Happy Path   Verifies create and
              qualification                       (CRUD)**       delete functionality
              (skill)                                            in a single flow
                                                                 while restoring the
                                                                 environment state.

  **TC-06**   Share most-liked   Buzz             **Edge Case**  Handles dynamic,
              post from Buzz                                     non-deterministic UI
              feed                                               content and
                                                                 demonstrates
                                                                 selector
                                                                 flexibility.

  **TC-07**   Enter alphabetical Personal Info    **Negative**   Ensures strict type
              input in Date of                                   validation for date
              Birth                                              fields and prevents
                                                                 invalid data entry.
  -----------------------------------------------------------------------------------

------------------------------------------------------------------------

### 🧠 Test Coverage Breakdown

-   **Happy Path Tests:** TC-01, TC-03, TC-05\
-   **Negative Tests:** TC-02, TC-04, TC-07\
-   **Edge Cases:** TC-04, TC-06

------------------------------------------------------------------------

### ⚖️ Design Notes

-   **TC-04** ensures domain-level validation beyond basic input
    checks.\
-   **TC-05** combines create and delete actions to maintain environment
    hygiene and avoid test data pollution.\
-   **TC-06** demonstrates handling of dynamic UI elements, which are
    typically avoided in automation due to instability.

------------------------------------------------------------------------

## 🔌 API Testing Approach (Postman)

API testing is handled using Postman to: 
- Separate UI and API concerns\
- Enable faster request validation\
- Use built-in scripting and collections

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   Playwright --- UI Automation\
-   JavaScript (Node.js)\
-   Postman --- API Testing\
-   GitHub --- Version control

------------------------------------------------------------------------

## 📁 Project Structure

project-root/ ├── tests/\
├── pages/\
├── postman/\
│ └── disney-api.json ├── TEST_PLAN.md\
├── README.md\
└── playwright.config.js

------------------------------------------------------------------------

## ▶️ Running the Tests

### UI Tests (Playwright)

npm install\
npx playwright test

### API Tests (Postman / Newman)

npm install -g newman\
newman run postman/disney-api.json

------------------------------------------------------------------------

## 💡 Notes

This project prioritizes **high-impact test coverage and real-world QA
decisions** over quantity.
