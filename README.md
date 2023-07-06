# Challenge verify-my
Automated Testing Project with Cypress

## Description

This is a test automation project using the Cypress framework. The project covers API test scenarios for the service: https://serverest.dev/ and UI test scenarios for the service: https://bugbank.netlify.app/.

Plus: GitHub workflow (GitHub Action) has been added.

## Test Scenarios Checklist:

`Backend API Tests: Integration Tests: POST/GET/PUT/DELETE`

- Create a new user

-  Retrieve a user by ID

- Retrieve a user by Name

- Retrieve a user by Email

- Retrieve a user by ID

- Update a user

- Delete a user

`UI Tests: Make a bank transfer between two accounts`

- Register two accounts with balance

- Login with the user

- Make the transfer

- Validate the transaction

## **Requirements** 

Node v18^

# Installation
### 1 - Clone o repositório do projeto:
```https://github.com/guidomingosDev/challenge-verifymy.git ```

### 2 - Navigate to the project directory:
```
cd challenge-verifymy
```

### 3 - Install the dependencies:
``` 
npm install 
```

### 4 - How to run the tests:

To use the Cypress CLI: 
```
 npm run cy:open 
```

To run the API tests:

```
 npm run test:api
```

To run the UI tests: 
```
 npm run test:ui
```

