import { Router } from 'express';
import MatchesService from '../services/MatchesService';
import MatchesController from '../controller/MatchesController';
import MatchesModel from '../models/MatchesModel';
import MatchesSequelizeRepository from '../repository/sequelize/MatchesSequelizeRepository';
import { resultCreateMatche } from '../tests/mocks/matches';

const router = Router();

const matchesRespository = new MatchesSequelizeRepository();
const matchesModel = new MatchesModel(matchesRespository);
const matchesService = new MatchesService(matchesModel);
const matchesController = new MatchesController(matchesService);

router.get('/', (req, res) => matchesController.getAll(req, res));
router.post('/', (req, res) => res.status(201).json(resultCreateMatche));

export default router;
