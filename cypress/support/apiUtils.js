import { faker } from '@faker-js/faker'

function createUserDataApi(){
    const payloadUserCreated = {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.number.int().toString(),
        administrador: "true"
    }

   return payloadUserCreated
}

export { createUserDataApi }