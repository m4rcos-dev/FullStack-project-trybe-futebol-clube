import { Router } from 'express';
import { resultLeaderboards } from '../tests/mocks/leaderboards';

const router = Router();

router.get('/home', (req, res) => res.status(200).json(resultLeaderboards));

export default router;
