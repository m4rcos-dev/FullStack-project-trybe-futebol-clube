import * as jwt from 'jsonwebtoken';
import { IUserModel } from '../interfaces/UserInterface';
import { ILogin, ILoginResult, ILoginService } from '../interfaces/LoginInterface';

export default class LoginService implements ILoginService {
  private _userModel: IUserModel;

  constructor(userModel: IUserModel) {
    this._userModel = userModel;
  }

  async assinInUser(user: ILogin): Promise<ILoginResult> {
    const result = await this._userModel.findByEmail(user.email);
    if (!result) return { status: 400, message: 'invalid' };
    const payload = { data: result };
    const secret = process.env.JWT_SECRET || 'secretJWT';
    const token = jwt.sign(
      payload,
      secret,

      { algorithm: 'HS256', expiresIn: '2d' },
    );
    return { status: 200, token };
  }
}
