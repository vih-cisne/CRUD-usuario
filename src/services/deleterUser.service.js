import users from "../database/users"


const deleteUserService = (id) => {

    const userIndex = users.findIndex(element => element.id === id)
    const objectToReturn = {}

    if(userIndex === -1) {
        objectToReturn.answer = {message: "Usuário não encontrado"}
        objectToReturn.status = 404
      return objectToReturn
    }

    users.splice(userIndex, 1)

    objectToReturn.answer = "Usuário excluido"
    objectToReturn.status = 200
    return objectToReturn


}

export default deleteUserService