import { Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/home', (req, res) => leaderboardController.getAllHomeTeam(req, res));

export default router;
