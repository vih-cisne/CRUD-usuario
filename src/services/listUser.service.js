import users from "../database/users"


const listUsersService = () => {

    const object = {}

    object.answer = users
    object.status = 200

    return object
}

export default listUsersService

