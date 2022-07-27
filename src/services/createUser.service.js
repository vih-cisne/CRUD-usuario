import users from "../database/users";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const objectToReturn = {};

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = new Date();

  const newUser = {
    id: uuidv4(),
    email,
    name,
    isAdm,
    password: hashedPassword,
    createdOn: data,
    updatedOn: data,
  };

  users.push(newUser);

  objectToReturn.status = 201;
  objectToReturn.answer = {
    id: uuidv4(),
    email,
    name,
    isAdm,
    createdOn: data,
    updatedOn: data,
  };

  return objectToReturn;
};

export default createUserService;
