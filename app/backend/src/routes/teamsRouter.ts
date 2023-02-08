import { Router } from 'express';
import TeamsService from '../services/TeamsService';
import TeamsController from '../controller/TeamsController';
import TeamsModel from '../models/TeamsModel';

const router = Router();

const teamsModel = new TeamsModel();
const teamsService = new TeamsService(teamsModel);
const teamsController = new TeamsController(teamsService);

router.get('/', (req, res) => teamsController.getAll(req, res));

export default router;
