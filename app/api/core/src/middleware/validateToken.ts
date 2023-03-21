import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET as string;

const validateToken = (req: Request, res: Response, next: NextFunction): Response | void => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'User is not logged' });
  try {
    jwt.verify(auth, SECRET) as jwt.JwtPayload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
