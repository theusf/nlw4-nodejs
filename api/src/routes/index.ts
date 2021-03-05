import {Router} from 'express';
import surveysController from '../controllers/SurveysController';
import userController from '../controllers/UserController';
import sendMail from '../controllers/SendMailController'

const router = Router(); 

router.post("/users", userController.create)
router.post("/surveys", surveysController.create)

router.get("/surveys", surveysController.show)

router.post("/sendMail", sendMail.execute)

export { router }