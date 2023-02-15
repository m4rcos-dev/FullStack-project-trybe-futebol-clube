import { Router } from 'express';
import MatchesService from '../services/MatchesService';
import MatchesController from '../controller/MatchesController';
import MatchesModel from '../models/MatchesModel';

const router = Router();

const matchesModel = new MatchesModel();
const matchesService = new MatchesService(matchesModel);
const matchesController = new MatchesController(matchesService);

router.get('/', (req, res) => matchesController.getAll(req, res));

export default router;
