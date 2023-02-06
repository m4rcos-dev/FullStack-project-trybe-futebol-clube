import { Router } from 'express';
import LoginController from '../controller/LoginController';
import LoginService from '../services/LoginService';
import UserModel from '../models/UserModel';
import UserSequelizeRepository from '../repository/sequelize/UserSequelizeRepository';

const router = Router();

const userSequilizeRepository = new UserSequelizeRepository();
const loginUserModel = new UserModel(userSequilizeRepository);
const loginService = new LoginService(loginUserModel);
const loginController = new LoginController(loginService);

router.post('/', (req, res) => loginController.asinInUser(req, res));

export default router;
