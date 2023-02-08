import { Router } from 'express';
import TeamsController from '../controller/TeamsController';

const router = Router();

const teamsController = new TeamsController();

router.get('/', (req, res) => teamsController.getAll(req, res));

export default router;
