import { Router } from 'express';
import validateLogin from '../middleware/validateLogin';
import LoginController from '../controller/LoginController';
import LoginService from '../services/LoginService';
import UserModel from '../models/UserModel';
import UserSequelizeRepository from '../repository/sequelize/UserSequelizeRepository';

const router = Router();

const userSequilizeRepository = new UserSequelizeRepository();
const loginUserModel = new UserModel(userSequilizeRepository);
const loginService = new LoginService(loginUserModel);
const loginController = new LoginController(loginService);

router.post('/', validateLogin, (req, res) => loginController.asinInUser(req, res));
router.get('/', (req, res) => res.status(200).json({ role: 'admin' }));

export default router;
