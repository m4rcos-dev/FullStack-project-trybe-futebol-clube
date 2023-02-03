import { Request, Response } from 'express';
import { ILoginService } from '../interfaces/LoginInterface';

// export default async function assinInUser(req: Request, res: Response) {
//   return res.status(200).json({ token: 'eyJhbGciOiJIUzI1NiIsIn' });
// }

// Outra forma de fazer com class porem o linter reclama do this.
export default class LoginController {
  private _loginService: ILoginService;

  constructor(loginService: ILoginService) {
    this._loginService = loginService;
  }

  async asinInUser(req: Request, res: Response): Promise<Response | void> {
    const user = req.body;
    const { status, message, token } = await this._loginService.assinInUser(user);
    if (message) return res.status(status).json({ message });
    return res.status(status).json({ token });
  }
}
