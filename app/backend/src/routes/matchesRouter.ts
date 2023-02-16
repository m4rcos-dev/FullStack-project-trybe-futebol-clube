import { Router } from 'express';
import MatchesService from '../services/MatchesService';
import MatchesController from '../controller/MatchesController';
import MatchesModel from '../models/MatchesModel';
import MatchesSequelizeRepository from '../repository/sequelize/MatchesSequelizeRepository';
import validateToken from '../middleware/validateToken';
import TeamsService from '../services/TeamsService';
import TeamsModel from '../models/TeamsModel';
import TeamsSequelizeRepository from '../repository/sequelize/TeamsSequelizeRepository';

const router = Router();

const teamRepository = new TeamsSequelizeRepository();
const teamModel = new TeamsModel(teamRepository);
const teamService = new TeamsService(teamModel);

const matchesRespository = new MatchesSequelizeRepository();
const matchesModel = new MatchesModel(matchesRespository);
const matchesService = new MatchesService(matchesModel, teamService);
const matchesController = new MatchesController(matchesService);

router.get('/', (req, res) => matchesController.getAll(req, res));
router.post('/', validateToken, (req, res) => matchesController.create(req, res));
router.patch('/:id/finish', (req, res) => matchesController.update(req, res));
router.patch('/:id', (req, res) => res.status(200).json({ message: 'Updated' }));

export default router;
