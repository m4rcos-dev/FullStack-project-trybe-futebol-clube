import { Router } from 'express';
import validateLogin from '../middleware/validateLogin';
import LoginController from '../controller/LoginController';
import LoginService from '../services/LoginService';
import UserModel from '../models/UserModel';
import UserSequelizeRepository from '../repository/sequelize/UserSequelizeRepository';
import validateUser from '../middleware/validateUser';

const router = Router();

const userSequilizeRepository = new UserSequelizeRepository();
const loginUserModel = new UserModel(userSequilizeRepository);
const loginService = new LoginService(loginUserModel);
const loginController = new LoginController(loginService);

router.post('/', validateLogin, (req, res) => loginController.asinInUser(req, res));
router.get('/', validateUser);

export default router;
