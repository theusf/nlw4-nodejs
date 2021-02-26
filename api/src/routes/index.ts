import {Router} from 'express';
import surveysController from '../controllers/SurveysController';
import userController from '../controllers/UserController';

const router = Router(); 

router.post("/users", userController.create)
router.post("/surveys", surveysController.create)

router.get("/surveys", surveysController.show)

export { router }