export interface IUser {
  id?: number,
  username: string,
  email: string,
  password: string,
}

export interface IUserRole extends IUser{
  role: string,
}

export interface IUserModel {
  findByEmail(email: string): Promise<IUser | null>
}

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>
}
