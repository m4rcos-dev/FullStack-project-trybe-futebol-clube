import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secretJWT';

const validateUser = (req: Request, res: Response): Response | void => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'user invalid' });
  try {
    const user = jwt.verify(auth, SECRET) as jwt.JwtPayload;
    const { role } = user.data;
    return res.status(200).json({ role });
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default validateUser;
