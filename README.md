QA Automation Challenge — Ingrid Garcia
=======================================

📌 Overview
-----------

This project contains automated UI and API tests for:

*   OrangeHRM Demo (UI)
    
*   Disney API (API)
    

The solution demonstrates end-to-end QA automation using modern tools and CI/CD integration.

⚙️ Setup & Installation
-----------------------

### Clone the repository

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/ingridcgr/GBH-Ingrid-Garcia-Junior-QA-Challenge.git  cd GBH-Ingrid-Garcia-Junior-QA-Challenge   `

### Install dependencies

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

### Install Playwright browsers

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright install   `

▶️ Running Tests
----------------

### UI Tests (Playwright)

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright test   `

View report:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx playwright show-report   `

### API Tests (Newman)

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx newman run postman/Disney_API_Collection_v2.postman_collection.json \    -e postman/Disney_API.postman_environment.json   `

🤖 CI/CD Pipeline
-----------------

GitHub Actions automatically runs:

*   API tests (Newman)
    
*   UI tests (Playwright)
    

on every push and pull request.

Reports are uploaded as artifacts.

🧰 Tools & Dependencies
-----------------------

ToolPurposeNode.js (v20)RuntimePlaywrightUI automationNewmanAPI test runnerPostmanAPI test designGitHub ActionsCI/CD

🧪 Test Structure
-----------------

### UI Tests (/test)

*   auth.spec.js → authentication
    
*   buzz.spec.js → dynamic content
    
*   myinfo.spec.js → user data
    
*   nationality.spec.js → validation
    
*   qualification.spec.js → CRUD flows
    

### API Tests (/postman)

*   Collection-based testing
    
*   Covers status codes, filters, and edge cases
    

📊 Reporting
------------

*   Playwright → HTML reports
    
*   Newman → JUnit reports
    
*   Both available in CI artifacts
