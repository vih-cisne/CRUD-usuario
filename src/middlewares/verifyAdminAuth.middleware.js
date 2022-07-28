import jwt from "jsonwebtoken";
import users from "../database/users";

const verifyAdminAuthMiddleware = (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1];

  const userInfo = jwt.decode(token);

  if (userInfo.isAdm) {
    next();
  } else {
    return res
      .status(401)
      .json({ message: "Você não tem permissão para acessar essa rota" });
  }

};

export default verifyAdminAuthMiddleware;
