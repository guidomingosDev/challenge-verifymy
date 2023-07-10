import * as createData from '../../support/uiUtils'

describe("Should to make a bank transfer between two accounts", () => {
    let user1, user2
    let account1, digitAccount1
    let account2, digitAccount2
    let storageAccount
    user1 = createData.createUserDataUiTests()
    user2 = createData.createUserDataUiTests()

    beforeEach(() => {
        cy.visit("https://bugbank.netlify.app/")
    })

    it("Register two account with balance", () => {

        cy.clickRegistrarButton()
        cy.createUser(user1.email, user1.name, user1.password, user1.password)
        cy.get('#modalText').contains('criada com sucesso');
        cy.getAccountUser().then((res) => {
            account1 = res[0]
            digitAccount1 = res[1]
        })

        cy.closeModal()
        cy.clearFields()
        cy.clickRegistrarButton()
        
        cy.createUser(user2.email, user2.name, user2.password, user2.password)
        cy.get('#modalText').contains('criada com sucesso');
        cy.getAccountUser().then((res) => {
            account2 = res[0]
            digitAccount2 = res[1]
        })

        cy.getAllLocalStorage().then((res) => {
            storageAccount = res
        })
    })

    it("Should login with the user 1", () => {
        cy.window().then((window) => {
            window.localStorage.setItem(user1.email, storageAccount['https://bugbank.netlify.app'][user1.email])
            window.localStorage.setItem(`transaction:${user1.email}`, storageAccount['https://bugbank.netlify.app'][`transaction:${user1.email}`])
            window.localStorage.setItem(user2.email, storageAccount['https://bugbank.netlify.app'][user2.email])
            window.localStorage.setItem(`transaction:${user2.email}`, storageAccount['https://bugbank.netlify.app'][`transaction:${user2.email}`])
        })

        cy.login(user1.email, user1.password)
    })

    it("Should make the transfer for user 2", () => {
        cy.window().then((window) => {
            window.localStorage.setItem(user1.email, storageAccount['https://bugbank.netlify.app'][user1.email])
            window.localStorage.setItem(`transaction:${user1.email}`, storageAccount['https://bugbank.netlify.app'][`transaction:${user1.email}`])
            window.localStorage.setItem(user2.email, storageAccount['https://bugbank.netlify.app'][user2.email])
            window.localStorage.setItem(`transaction:${user2.email}`, storageAccount['https://bugbank.netlify.app'][`transaction:${user2.email}`])
        })
        cy.login(user1.email, user1.password)

        cy.makeTransfer(account2, digitAccount2)
        cy.get('#modalText').should('have.text', 'Transferencia realizada com sucesso');
        cy.closeModal()
        cy.btnBackHome()
        cy.checkBalance('900,00')
        cy.btnExit()
    })

    it("Should validate the transaction for user 2", () => {
        cy.window().then((window) => {
            window.localStorage.setItem(user1.email, storageAccount['https://bugbank.netlify.app'][user1.email])
            window.localStorage.setItem(`transaction:${user1.email}`, storageAccount['https://bugbank.netlify.app'][`transaction:${user1.email}`])
            window.localStorage.setItem(user2.email, storageAccount['https://bugbank.netlify.app'][user2.email])
            window.localStorage.setItem(`transaction:${user2.email}`, storageAccount['https://bugbank.netlify.app'][`transaction:${user2.email}`])
        })
        cy.login(user2.email, user2.password)
        cy.wait(1000)
        cy.checkBalance('1.100,00')
        cy.btnExit()

    })

})


