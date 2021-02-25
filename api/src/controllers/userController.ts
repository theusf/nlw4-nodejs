import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from "../models/user"

class UserController {

    //Precisa passar qual o tipo do req e res
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersRepository = getRepository(User);
        //É como se fosse um manager de dados, manipulação de dados.

        const userAlreadyExists = await usersRepository.findOne({ email })

        if (userAlreadyExists)
            return response.status(400).json({ error: "This user already exists!" })

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);

        return response.json(user)
    }

}

export default new UserController()