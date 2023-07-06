Cypress.Commands.add("getUser", (type, value) => {
    return cy.request("GET", `https://serverest.dev/usuarios?${type}=${value}`)
})

Cypress.Commands.add("postUser", (userData) => {
    return cy.request("POST", `https://serverest.dev/usuarios`, userData)
})

Cypress.Commands.add("getUserId", (id) => {
    return cy.request("GET", `https://serverest.dev/usuarios/${id}`)
})

Cypress.Commands.add("deleteUser", (id) => {
    return cy.request("DELETE", `https://serverest.dev/usuarios/${id}`)
})

Cypress.Commands.add("updateUser", (id, updateData) => {
    return cy.request("PUT", `https://serverest.dev/usuarios/${id}`, updateData)
})
