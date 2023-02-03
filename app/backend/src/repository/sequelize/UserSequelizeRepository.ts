import User from '../../database/models/User';
import { IUser, IUserRepository } from '../../interfaces/UserInterface';

export default class UserSequelizeRepository implements IUserRepository {
  constructor(private userModel = User) {}

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.userModel
      .findOne({ where: { email }, attributes: { exclude: ['password'] } });
    return user;
  }
}
