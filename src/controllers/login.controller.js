import loginService from "../services/login.service";

const loginController = (req, res) => {

    const { email, password } = req.body

    const userLogin = loginService(email,password)

    return res.status(userLogin.status).json(userLogin.answer)

}

export default loginController