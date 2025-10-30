CypressJavaScript


 Project Overview

CypressJavaScript is a cutting-edge automation testing suite built with Cypress & JavaScript.
It provides end-to-end testing for web applications, ensuring your apps remain bug-free while integrating seamlessly with CI/CD pipelines using GitHub Actions.

“Automate everything, test once, deploy confidently.”

📂 Repository Structure
.github/workflows/   → GitHub Actions CI/CD workflows
cypress/             → All Cypress test files
  ├─ e2e/            → End-to-end test scripts
  ├─ fixtures/       → Test data for automation
  └─ support/        → Custom commands & helpers
cypress.config.js    → Cypress configuration
package.json         → Dependencies & scripts
.gitignore           → Files to ignore in Git


Key Features

✅ Automated end-to-end testing with Cypress

✅ Runs tests in Chrome using GitHub Actions

✅ Integrates easily into CI/CD pipelines

✅ Fully written in JavaScript

✅ Designed for developers & QA engineers


 GitHub Actions

The repo is fully integrated with GitHub Actions to automatically run tests on every commit or pull request:

Workflow	Last Run	Duration	Status
Run Cypress Tests (Chrome)	Main branch	57s	✅ Success

Tests run automatically to ensure code quality & stability before deployment.



 Getting Started

Clone the repository

git clone https://github.com/stylianosAutomation/CypressJavaScript.git


Install dependencies

npm install


Run tests locally

npx cypress open


Push changes — GitHub Actions will automatically run tests.

🎯 Contributing

We welcome contributions! Please fork the repository and create a pull request for review.

Contributors:

stylianosAutomation – Repository owner & main contributor

stylianoResp – Contributor

📌 Recommended Tools

Node.js ≥ 18.x

Cypress ≥ 12.x

GitHub Desktop / CLI for easier management

 Tip

Always run tests locally before pushing to avoid CI/CD failures.
Automate, test, and deploy confidently! ✅

