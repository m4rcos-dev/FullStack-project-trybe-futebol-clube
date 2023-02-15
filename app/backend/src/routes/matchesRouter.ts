import { Router } from 'express';
import MatchesService from '../services/MatchesService';
import MatchesController from '../controller/MatchesController';

const router = Router();

const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

router.get('/', (req, res) => matchesController.getAll(req, res));

export default router;
