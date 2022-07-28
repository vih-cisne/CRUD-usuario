import deleteUserService from "../services/deleterUser.service"

const deleteUserControler = (req,res) => {

    const { id } = req.params

    const result = deleteUserService(id)

    return res.status(result.status).json(result.answer)

}

export default deleteUserControler


