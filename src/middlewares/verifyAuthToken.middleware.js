import jwt from "jsonwebtoken"

const verifyAuthTokenMiddleware = (req, res, next) => {
    
    let token = req.headers.authorization
;
    
    if(!token) {
        return res.status(401).json({message: "Faltando o token de autorização"})
    }
    //token = token.split(" ")[1]

    jwt.verify(token, "SECRET_KEY", (error, decode) => {

        if(error) {
            return res.status(401).json({message: "Token inválido"})
        } 
        

    })
    
    next()
}

export default verifyAuthTokenMiddleware