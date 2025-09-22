# ServiceNow Playwright Tests (TypeScript)

Automated end-to-end tests for the [ServiceNow](https://www.servicenow.com/) platform using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern.

## Features

TBD

## Project Structure

SNow-PlaywrightTests-TypeScript/\
│\
├── pages/ # Page Object Models (LoginPage.ts, etc.)\
├── tests/ # Test files (.spec.ts)\
├── fixtures/ # Helper files (e.g. secrets.json)\
├── utils/ # Utilities (e.g. config loader)\
├── playwright.config.ts # **Playwright configuration**\
├── tsconfig.json # **TypeScript config**\
├── eslint.config.mjs # **ESLint config**\
└── README.md # This file

## Tests

- Login valid credentials
- Login with invalid credentials

## Commands to use

Run all tests `npx playwright test`\
Run tests with UI `npx playwright test --ui`\
View test report `npx playwright show-report`

## Files to understand

package.json - TBD\
config.ts - TBD\
eslint.config.mjs - TBD\
tsconfig.json - TBD\
prettierrc.json - TBD

## Important to remember

TBD
