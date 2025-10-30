CypressJavaScript

Description:
This repository contains Cypress automation tests written in JavaScript for end-to-end testing of web applications. It is designed for developers and QA engineers who want to automate testing and integrate it into CI/CD workflows.

Repository Structure

.github/workflows/ – Contains GitHub Actions workflow(s) for automated test runs.

cypress/ – Cypress folder with:

e2e tests

Fixtures and support files

cypress.config.js – Cypress configuration file.

package.json / package-lock.json – Node.js dependencies and scripts.

.gitignore – Files and folders to ignore in Git.

Languages

JavaScript

Purpose

Automates end-to-end testing using Cypress.

Supports CI/CD integration via GitHub Actions.

GitHub Actions

Workflow: Run Cypress Tests (Chrome)

Last Run: Manual run triggered by stylianosAutomation on branch main

Duration: 57 seconds

Status: ✅ Success

This workflow automatically runs Cypress tests in Chrome whenever triggered, ensuring tests pass before deployment.
