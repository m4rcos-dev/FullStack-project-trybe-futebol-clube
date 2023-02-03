import { IUserModel } from '../interfaces/UserInterface';
import { ILogin, ILoginResult, ILoginService } from '../interfaces/LoginInterface';
import tokenGenerate from '../utils/tokenGenerate';

export default class LoginService implements ILoginService {
  private _userModel: IUserModel;

  constructor(userModel: IUserModel) {
    this._userModel = userModel;
  }

  async assinInUser(user: ILogin): Promise<ILoginResult> {
    const result = await this._userModel.findByEmail(user.email);
    if (!result) return { status: 400, message: 'invalid' };
    const token = tokenGenerate(result);
    return { status: 200, token };
  }
}
