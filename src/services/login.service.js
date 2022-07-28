import jwt from "jsonwebtoken";
import users from "../database/users";
import * as bcrypt from "bcryptjs";

const loginService = (email, password) => {
  const user = users.find((user) => user.email === email);
  const objectToReturn = {};

  if (!user) {
    objectToReturn.status = 401;
    objectToReturn.answer = {message: "Email ou senha inválidos"};

    return objectToReturn;
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    objectToReturn.status = 401;
    objectToReturn.answer = {message: "Email ou senha inválidos"};

    return objectToReturn;
  }
  
  const token = jwt.sign({ email: email, isAdm: user.isAdm }, "1234", {
    expiresIn: "24h"
  });

  objectToReturn.status = 200;
  objectToReturn.answer = { token: token };

  return objectToReturn;
};

export default loginService;
