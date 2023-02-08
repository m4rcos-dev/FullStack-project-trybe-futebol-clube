import { Router } from 'express';
import TeamsService from '../services/TeamsService';
import TeamsController from '../controller/TeamsController';
import TeamsModel from '../models/TeamsModel';
import TeamsSequelizeRepository from '../repository/sequelize/TeamsSequelizeRepository';

const router = Router();

const teamsRepository = new TeamsSequelizeRepository();
const teamsModel = new TeamsModel(teamsRepository);
const teamsService = new TeamsService(teamsModel);
const teamsController = new TeamsController(teamsService);

router.get('/', (req, res) => teamsController.getAll(req, res));

export default router;
