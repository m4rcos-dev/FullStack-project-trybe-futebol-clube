import { Router } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controller/LeaderboardController';
import LeaderboardModel from '../models/LeaderboardModel';
import LeaderboardSequelizeRepository from '../repository/sequelize/LeaderboardSequelizeRepository';
import { resultLeaderboards } from '../tests/mocks/leaderboards';

const router = Router();

const leaderboardRepository = new LeaderboardSequelizeRepository();
const leaderboardModel = new LeaderboardModel(leaderboardRepository);
const leaderboardService = new LeaderboardService(leaderboardModel);
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/home', (req, res) => leaderboardController.getAllHomeTeams(req, res));
router.get('/away', (req, res) => leaderboardController.getAllAwayTeams(req, res));
router.get('/', (req, res) => res.status(200).json(resultLeaderboards));

export default router;
