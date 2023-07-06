import { faker } from '@faker-js/faker'

function createUserDataUiTests(){
    const userData = {
        email: faker.internet.email(),
        name: faker.person.firstName(),
        password: faker.internet.password().toString()
    }
    return userData;
}

export { createUserDataUiTests }