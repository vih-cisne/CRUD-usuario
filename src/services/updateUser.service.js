import users from "../database/users";

const updateUserService = (id, userToUpdate) => {
  const userIndex = users.findIndex((user) => user.id === id);
  const objectToReturn = {};

  if (userIndex === -1) {
    objectToReturn.status = 404;
    objectToReturn.answer = "Usuário não encontrado";
    return objectToReturn;
  }

  if (userToUpdate.isAdm !== users[userIndex].isAdm) {
    objectToReturn.status = 400;
    objectToReturn.answer = "Não é possível mudar a permissão de administrador";
    return objectToReturn;
  }

  userToUpdate.updatedOn = new Date();

  users[userIndex] = { ...users[userIndex], ...userToUpdate };

  objectToReturn.status = 200;
  objectToReturn.answer = {
    message: "Usuário atualizado com sucesso!",
    user: user[userIndex],
  };

  return objectToReturn;
};

export default updateUserService;
