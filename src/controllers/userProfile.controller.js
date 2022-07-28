import userProfileService from "../services/userProfile.service"

const userProfileController = (req, res) => {

    let token = req.headers.authorization.split(' ')[1] 

    const result = userProfileService(token)

    return res.status(result.status).json(result.answer)

}

export default userProfileController