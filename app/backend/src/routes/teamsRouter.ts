import { Router } from 'express';
import TeamsService from '../services/TeamsService';
import TeamsController from '../controller/TeamsController';
import TeamsModel from '../models/TeamsModel';
import TeamsSequelizeRepository from '../repository/sequelize/TeamsSequelizeRepository';
import { resultTeam } from '../tests/mocks/teams';

const router = Router();

const teamsRepository = new TeamsSequelizeRepository();
const teamsModel = new TeamsModel(teamsRepository);
const teamsService = new TeamsService(teamsModel);
const teamsController = new TeamsController(teamsService);

router.get('/', (req, res) => teamsController.getAll(req, res));
router.get('/:id', (req, res) => res.status(200).json(resultTeam));

export default router;
