import users from "../database/users";

const verifyEmailExistenceMiddleware = (req, res, next) => {

    const { email } = req.body

    const userAlreadyExists = users.find((user) => user.email === email);


    if (userAlreadyExists) {
        
        return res.status(400).json({ message: "Esse email já foi usado"})
    };

    next()
}

export default verifyEmailExistenceMiddleware