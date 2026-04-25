# GBH-Ingrid-Garcia-Junior-QA-Challenge
# 🧪 OrangeHRM + Disney API Test Automation Project

## 📌 Overview

This test plan and automation suite was built by **Ingrid Carolina Garcia** as part of a QA engineering challenge.

Ingrid is a QA professional with 8+ years of experience in manual and automation testing across web and mobile platforms. Most recently she served as Acting QA Lead at Restaurant Brands International, where she reduced manual regression effort by ~70 hours per release and cut triage time by ~40%.

---

### 🧪 What this suite covers

| Layer | Target | Tool |
|---|---|---|
| UI Testing | OrangeHRM Demo | Playwright + JavaScript |
| API Testing | Disney API | Postman + Newman |
| CI/CD | GitHub Actions | yml workflow |
| Reporting | HTML reports + artifacts | Playwright HTML + Newman HTML |

---

### 🎯 What this challenge demonstrates

- Test cases chosen based on real user frequency, input validation depth, and module coverage — not just happy paths
- Each test manages its own session and data — no cross-test dependencies
- Tool selection matched to each testing layer (Playwright for UI, Newman for API)

------------------------------------------------------------------------

## 🎯 Scope

---

### ✅ UI Testing — OrangeHRM Demo

🔗 https://opensource-demo.orangehrmlive.com

**Covered areas:**

- Authentication (sign in, sign out, invalid login)
- Admin module:
  - Nationality validation
  - Qualification (skill) lifecycle
- Buzz module (dynamic content interaction)
- Personal Information (Date of Birth validation)

**Out of scope:**

- Recruitment, Performance, Time, and Reports modules
- Employee creation and deletion via PIM
- Cross-browser testing (Chromium only)
- Visual/pixel-level regression testing
- Load, stress, or performance testing
- Mobile viewports or responsive layout testing

---

### ✅ API Testing — Disney API

🔗 https://api.disneyapi.dev

**Covered endpoints:**

- `GET /character` — full list, response structure, status code, pagination
- `GET /character?films=...` — filter by TV show (Jake and the Never Land Pirates)
- `GET /character?videoGames=...` — filter by video game (Kingdom Hearts III)

**Negative scenarios:**

- Invalid endpoints
- Non-existent IDs
- Malformed requests
- Error response structure validation

**Out of scope:**

- Authentication flows (API is public and unauthenticated)
- Write operations (API is read-only)
- Rate limit or performance testing

------------------------------------------------------------------------
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

------------------------------------------------------------------------

## 🔌 API Testing Approach (Postman)

API testing is handled using Postman to:

- Separate UI and API concerns
- Enable faster request validation
- Use built-in scripting and collections

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Playwright | UI Automation |
| JavaScript (Node.js) | Test language |
| Postman + Newman | API Testing |
| GitHub Actions | CI/CD pipeline |
| GitHub | Version control |

---

## ▶️ Running the Tests

Open the project in **Visual Studio Code**, then open the integrated terminal (`Terminal > New Terminal`) and run the following commands.

---

### UI Tests (Playwright)

Install dependencies:

```bash
npm install
npx playwright install
```

Run all UI tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/auth.spec.js
```

View the HTML report after the run:

```bash
npx playwright show-report
```

---

### API Tests (Postman / Newman)

Install Newman globally:

```bash
npm install -g newman
```

Run the Disney API collection:

```bash
newman run postman/disney-api.json
```

---

## 💡 Notes

This project prioritizes **high-impact test coverage and real-world QA decisions** over quantity.
