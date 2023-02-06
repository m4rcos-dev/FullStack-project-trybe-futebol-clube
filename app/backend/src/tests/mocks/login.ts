const resultFindOne = {
  id: 1,
  username: 'anyuser',
  role: 'anyrole',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
}

const bodyLogin = {
  email: "admin@admin.com",
  password: "secret_admin"
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
