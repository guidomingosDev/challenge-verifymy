Cypress.Commands.add("visitPage", (pageUrl) => {
    cy.visit(pageUrl)
})

Cypress.Commands.add("clickRegistrarButton", () => {
    cy.contains('button', 'Registrar').click()
})

Cypress.Commands.add("createUser", (email, name, password, confirmPassword) => {
    cy.get(':nth-child(2) > .input__default').click({ force: true }).type(email)
    cy.get(':nth-child(3) > .input__default').click({ force: true }).type(name)
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(password)
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(confirmPassword)
    cy.get('#toggleAddBalance').click({ force: true })
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true })
})


Cypress.Commands.add("getAccountUser", () => {
    cy.get("#modalText")
        .invoke("text")
        .then((text) => {
            const regex = /\b(\d+-\d+)\b/; 
            const match = text.match(regex);
            const valor = match && match[1];
            return valor.split("-")
        })
})


Cypress.Commands.add("closeModal", () => {
    cy.get('#btnCloseModal').click()
})

Cypress.Commands.add("clearFields", () => {
    cy.get(':nth-child(2) > .input__default').click({ force: true }).clear()
    cy.get(':nth-child(3) > .input__default').click({ force: true }).clear()
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).clear()
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).clear()
})

Cypress.Commands.add("login", (email, password) => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').first().click({ force: true }).type(email)
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({ force: true }).type(password)
    cy.get('.otUnI').click()
})


Cypress.Commands.add("makeTransfer", (account, digit, money) => {
    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.get(':nth-child(1) > .input__default').type(account)
    cy.get('.account__data > :nth-child(2) > .input__default').type(digit)
    cy.get('label[for="transferValue"]').next('input').type(money);
    cy.get(':nth-child(3) > .input__default').click({ force: true }).type('teste')
    cy.get('.style__ContainerButton-sc-1wsixal-0').click()
})

Cypress.Commands.add("btnBackHome", () => {
    cy.get('#btnBack').click()
})

Cypress.Commands.add("btnExit", () => {
    cy.get('#btnExit')
})
