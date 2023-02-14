import { Router } from 'express';
import { resultMatches } from '../tests/mocks/matches';

const router = Router();

router.get('/', (req, res) => res.status(200).json(resultMatches));

export default router;
