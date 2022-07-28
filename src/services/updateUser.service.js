import users from "../database/users";

const updateUserService = (id, userToUpdate) => {
  const userIndex = users.findIndex((user) => user.id === id);
  const objectToReturn = {};

  if (userIndex === -1) {
    objectToReturn.status = 404;
    objectToReturn.answer = { message: "Usuário não encontrado" };
    return objectToReturn;
  }

  if (userToUpdate.isAdm && userToUpdate.isAdm !== users[userIndex].isAdm) {
    objectToReturn.status = 400;
    objectToReturn.answer = {
      message: "Não é possível mudar a permissão de administrador",
    };
    return objectToReturn;
  }

  const newUser = userToUpdate

  newUser.updatedOn = new Date();

  users[userIndex] = { ...users[userIndex], ...newUser };
  console.log(objectToReturn);

  const {
    email,
    name,
    isAdm,
    createdOn,
    updatedOn
} = users[userIndex]

  let idUser = users[userIndex].id

  objectToReturn.status = 200;
  objectToReturn.answer = {
    id: idUser,
    email,
    name,
    isAdm,
    createdOn,
    updatedOn
};

  return objectToReturn;
};

export default updateUserService;
