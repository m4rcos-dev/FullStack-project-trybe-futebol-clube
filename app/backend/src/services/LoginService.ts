import * as bcrypt from 'bcryptjs';
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
    if (!result || !bcrypt
      .compareSync(
        user
          .password,
        result
          .password,
      )) { return { status: 401, message: 'Incorrect email or password' }; }
    const token = tokenGenerate(result);
    return { status: 200, token };
  }
}
