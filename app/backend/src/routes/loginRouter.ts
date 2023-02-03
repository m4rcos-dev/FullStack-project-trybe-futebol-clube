import { Router } from 'express';
import assinInUser from '../controller/LoginController';

const router = Router();

router.post('/', assinInUser);

// Outra forma de fazer com class porem o linter reclama do this.
// const loginController = new assinInUser();
// router.post('/', (req, res) => loginController.asinInUser(req, res));

export default router;
