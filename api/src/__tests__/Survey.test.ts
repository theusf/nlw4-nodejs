import request from 'supertest';
import { app } from '../app';

import createConnection from "../database";

//Testes de integração

// Não pode criar um repo fake. Precisa testar se tudo está funcionando
describe("Surveys", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    it('Should be abre to create a new survey', async () => {
        const response = await request(app)
        .post("/surveys")
        .send({
            "title": "Title Example",
            "description": "Description example"
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")

    })

    it('Should be abre to get all surveys', async () => {
        await request(app)
        .post("/surveys")
        .send({
            "title": "Title Example2",
            "description": "Description example2"
        })


        const response = await request(app)
        .get("/surveys")

        expect(response.status).toBe(201)
        expect(response.body).toHaveLength(2)

    })

})