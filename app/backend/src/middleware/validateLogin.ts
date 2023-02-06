import { NextFunction, Request, Response } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'All fields must be filled' });
  next();
};

export default validateLogin;
