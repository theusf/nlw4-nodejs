import request from 'supertest';
import { app } from '../app';

import createConnection from "../database";


//Testes de integração

// Não pode criar um repo fake. Precisa testar se tudo está funcionando
describe("Users", () => {

    let connection

    beforeAll(async () => {
        connection = await createConnection();

        await connection.runMigrations();
    })

    it('Should be abre to create a new user', async () => {
        const response = await request(app)
        .post("/users")
        .send({
            "name": "user",
            "email": "user@exemple.br"
        })

        expect(response.status).toBe(201)
    })

    it('Should not be able to create a user with an existent email', async () => {
        const response = await request(app)
        .post("/users")
        .send({
            "name": "user",
            "email": "user@exemple.br"
        })

        expect(response.status).toBe(400)
    })

   
})