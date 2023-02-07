import { Request, Response } from 'express';
import { ILoginService } from '../interfaces/LoginInterface';

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

  async validUser(_req: Request, res: Response): Promise<Response | void> {
    const { status, role } = await this._loginService.validUser();
    return res.status(status).json({ role });
  }
}
