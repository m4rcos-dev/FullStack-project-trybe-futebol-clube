export interface ILogin {
  email: string,
  password: string,
}

export interface ILoginResult {
  token?: string,
  status: number,
  message?: string,
}

export interface ILoginService {
  assinInUser(user: ILogin): Promise<ILoginResult>
}
