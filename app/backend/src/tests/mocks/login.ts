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

export { resultFindOne, bodyLogin, loginWhitoutEmail }
