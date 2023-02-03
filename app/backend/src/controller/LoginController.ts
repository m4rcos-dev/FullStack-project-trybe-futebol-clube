import { Request, Response } from 'express';

export default async function assinInUser(req: Request, res: Response) {
  return res.status(200).json({ token: 'eyJhbGciOiJIUzI1NiIsIn' });
}

// Outra forma de fazer com class porem o linter reclama do this.
// export default class LoginController {
//   async asinInUser(req: Request, res: Response): Promise<Response | void> {
//     return res.status(200).json({ token: 'eyJhbGciOiJIUzI1NiIsIn' });
//   }
// }
