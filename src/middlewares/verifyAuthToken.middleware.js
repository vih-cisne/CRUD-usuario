import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  
  if (!token) {
      return res.status(401).json({ message: "Faltando o token de autorização" });
}

token = token.split(' ')[1]

  try {
    let decoded = jwt.verify(token, "1234");
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido" });
  }

  next();

  
};

export default verifyAuthTokenMiddleware;
