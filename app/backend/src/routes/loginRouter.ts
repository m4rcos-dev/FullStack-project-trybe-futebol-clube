import { Router } from 'express';

const router = Router();

router.post('/', (_req, res) => res
  .status(200)
  .json({ token: 'eyJhbGciOiJIUzI1NiIsIn' }));

export default router;
