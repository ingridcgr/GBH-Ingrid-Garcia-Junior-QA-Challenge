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

### ✅ UI Testing — OrangeHRM Demo

[https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com/)

Covered areas:

*   Authentication
    
*   Admin module (Nationality, Qualification)
    
*   Buzz module
    
*   Personal Information
    

Out of scope:

*   Recruitment, Performance, Time modules
    
*   Employee lifecycle via PIM
    
*   Cross-browser testing
    
*   Performance and load testing
    
*   Mobile/responsive testing
    

### ✅ API Testing — Disney API

[https://api.disneyapi.dev](https://api.disneyapi.dev/)

Covered:

*   GET /character
    
*   Filtering (films, video games)
    
*   Response validation
    
*   Negative scenarios
    

Out of scope:

*   Authentication (public API)
    
*   Write operations
    
*   Performance testing
    

📋 Test Case Classification
---------------------------

IDTest CaseTypeTC-01Valid loginHappy PathTC-02Invalid loginNegativeTC-03LogoutHappy PathTC-04Numeric nationalityEdge + NegativeTC-05Add/Delete skillHappy PathTC-06Share Buzz postEdge CaseTC-07Invalid DOB inputNegative

🧠 Rationale
------------

*   **Authentication (TC-01, TC-02, TC-03)**Critical entry point. Failures here block all functionality.
    
*   **Nationality validation (TC-04)**Tests semantic correctness, not just required fields.
    
*   **Qualification lifecycle (TC-05)**Combines create/delete to avoid test data pollution.
    
*   **Buzz interaction (TC-06)**Covers dynamic UI behavior using runtime data.
    
*   **DOB validation (TC-07)**Ensures strict input type enforcement.
    

🧠 Design Decisions
-------------------

*   Tests are **independent** (no shared state)
    
*   Data is **cleaned up when needed**
    
*   Focus on **high-impact scenarios over quantity**
    
*   Selectors chosen for **stability and readability**
    

🔌 API Testing Approach
-----------------------

*   Postman used for request design
    
*   Newman used for automation
    
*   Assertions include:
    
    *   Status codes
        
    *   Response structure
        
    *   Edge cases
        

🧪 Coverage Summary
-------------------

CategoryTestsHappy PathTC-01, TC-03, TC-05NegativeTC-02, TC-04, TC-07Edge CasesTC-04, TC-06

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
