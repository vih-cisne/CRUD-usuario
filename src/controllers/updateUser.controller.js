import updateUserService from "../services/updateUser.service"


const updateUserController = (req,res) => {

    const { id } = req.params
    
    const result = updateUserService(id, req.body)
    console.log(result)

    return res.status(result.status).json(result.answer)

}

export default updateUserController