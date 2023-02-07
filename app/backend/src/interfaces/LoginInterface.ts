export interface ILogin {
  email: string,
  password: string,
}

export interface ILoginResult {
  token?: string,
  status: number,
  message?: string,
}

export interface IValidUser extends ILoginResult {
  role: string;
}

export interface ILoginService {
  assinInUser(user: ILogin): Promise<ILoginResult>
  validUser(): Promise<IValidUser>
}
