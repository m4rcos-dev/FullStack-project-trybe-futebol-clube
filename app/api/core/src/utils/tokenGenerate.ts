import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/UserInterface';

const SECRET = process.env.JWT_SECRET || 'secretJWT';

export default function tokenGenerate(payload: IUser) {
  const token = jwt.sign({ data: payload }, SECRET, { algorithm: 'HS256', expiresIn: '2d' });
  return token;
}
