import { Router } from 'express';
import { resultFindAll } from '../tests/mocks/teams';

const router = Router();

router.get('/', (req, res) => res.status(200).json(resultFindAll));

export default router;
