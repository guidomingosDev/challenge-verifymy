import * as createUser from '../../support/apiUtils';

describe("USER INTEGRATION TEST - POST/GET/PUT/DELETE", () => {
  let userData;
  let type;
  let idUser;
  let newUser;

  before(() => {
    cy.fixture("test-data.json").then((data) => {
      type = data.type;
    });
    userData = createUser.createUserDataApi();
    newUser = createUser.createUserDataApi();
  });

  it("Should create a new user", () => {
    cy.postUser(userData).should((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.contain({ message: "Cadastro realizado com sucesso" });
      idUser = response.body._id;
      expect(response.body._id).to.not.equal(null);
    });
  });

  it("Should retrieve a user by ID", () => {
    cy.getUser(type.id, idUser).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should retrieve a user by Name", () => {
    cy.getUser(type.nome, userData.nome).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should retrieve a user by Email", () => {
    cy.getUser(type.email, userData.email).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should retrieve a user by ID", () => {
    cy.getUserId(idUser).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should update a user", () => {
    cy.updateUser(idUser, newUser).should((response) => {
      expect(response.status).to.eq(200);
      expect(newUser.nome).to.equal(newUser.nome);
      expect(newUser.email).to.equal(newUser.email);
    });
  });

  it("Should delete a user", () => {
    cy.deleteUser(idUser).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain({ message: "Registro excluído com sucesso" });
    });
  });
});


