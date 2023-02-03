import { IUser, IUserModel, IUserRepository } from '../interfaces/UserInterface';

export default class UserModel implements IUserModel {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const result = await this._userRepository.findByEmail(email);
    return result;
  }
}
