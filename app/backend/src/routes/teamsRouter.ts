import { Router } from 'express';
import TeamsService from '../services/TeamsService';
import TeamsController from '../controller/TeamsController';

const router = Router();

const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);

router.get('/', (req, res) => teamsController.getAll(req, res));

export default router;
