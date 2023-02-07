import { IUserModel } from '../interfaces/UserInterface';
import { ILogin, ILoginResult, ILoginService } from '../interfaces/LoginInterface';
import tokenGenerate from '../utils/tokenGenerate';
import bcryptVerify from '../utils/bcrypt';

export default class LoginService implements ILoginService {
  private _userModel: IUserModel;

  constructor(userModel: IUserModel) {
    this._userModel = userModel;
  }

  async assinInUser(user: ILogin): Promise<ILoginResult> {
    const { email, password } = user;
    const result = await this._userModel.findByEmail(email);
    if (!result || !bcryptVerify(password, result.password)) {
      return { status: 401, message: 'Incorrect email or password' };
    }
    const token = tokenGenerate(result);
    return { status: 200, token };
  }
}
