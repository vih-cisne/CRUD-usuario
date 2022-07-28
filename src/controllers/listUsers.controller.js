import listUsersService from "../services/listUser.service"


const listUsersController = (req, res) => {
    
    const users = listUsersService()
    
    return res.status(users.status).json(users.answer)
    
}
export default listUsersController