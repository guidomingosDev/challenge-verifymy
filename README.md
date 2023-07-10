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
    - The application exhibited unexpected behavior when validating the balance of user two's bank account, as the money was not being added correctly. Despite this, I proceeded with the scenario as it is, as I suspect that this issue might be related to the application's use of local memory storage. However, I was able to manually validate the same scenario successfully.


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
# Bug Reports:

### Account Registration Screen:
- It is possible to create a new account with an email that already exists.

- After creating an account, the form is not cleared.

### Transfer Screen
![image](https://github.com/guidomingosDev/challenge-verifymy/assets/112564366/6b5002ef-2d36-4ee3-bbfe-49399a4aabd5)

- The account number and digit fields in the form accept letters.
- The account number and digit fields in the form do not have a character limit.
- The error message of the input "Valor transferência" is not correct. May interfere with the user's reading
- Even with invalid data, button "Transferir agora" is enabled


