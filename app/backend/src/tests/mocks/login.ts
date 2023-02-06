const resultFindOne = {
  id: 1,
  username: 'anyuser',
  role: 'anyrole',
  email: 'any@anyemail.com',
  password: 'anypassword',
}

const bodyLogin = {
  email: "any@anyemail.com",
  password: "anypassword"
}

const loginWhitoutEmail = {
  email: "",
  password: "anypassword",
}

const loginWhitoutPassword = {
  email: "any@anyemail.com",
  password: "",
}

const loginEmailOrPasswordInvalid = {
  email: "teste@anyemail.com",
  password: "testepassword"
}

export { resultFindOne, bodyLogin, loginWhitoutEmail, loginWhitoutPassword, loginEmailOrPasswordInvalid }
