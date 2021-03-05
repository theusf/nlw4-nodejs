import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendMailService from '../services/sendMailService';
import {resolve} from 'path'; //Mapear independente do sistema


class SendMailController {

    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const usersRepository = await getCustomRepository(UsersRepository);
        const surveysRepository = await getCustomRepository(SurveysRepository);
        const surveysUserRepository = await getCustomRepository(SurveysUsersRepository);

        const user = await usersRepository.findOne({ email })

        if (!user)
            return response.status(400).json({
                error: "User does not exists",

            })

        const survey = await surveysRepository.findOne({ id: survey_id })

        if (!survey) {
            return response.status(400).json({
                error: "Survey does not exist",
            })
        }


        const templatePath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs")

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            user_id: user.id,
            link: process.env.URL_MAIL_RESPONSE
        }


        const SurveyUsersAlreadyExist = 
        await surveysUserRepository
        .findOne({where: [{user_id: user.id}, {value: null}],
            relations: ["user", "survey"]
        })


        if (SurveyUsersAlreadyExist) {
            await SendMailService.execute(email, survey.title, variables, templatePath)
            return response.json(SurveyUsersAlreadyExist)
        }
        //Salvar as informações na tabela.
        const surveyUser = surveysUserRepository.create({
            user_id: user.id,
            survey_id
        })

        surveysUserRepository.save(surveyUser)

        // Enviar e-mail para o usuario
        //...
        await SendMailService.execute(email, survey.title, variables, templatePath)

        return response.json(surveyUser)
    }
}

export default new SendMailController()