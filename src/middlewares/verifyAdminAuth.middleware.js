import jwt from "jsonwebtoken";
import users from "../database/users";

const verifyAdminAuthMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  const userInfo = jwt.decode(token);

  if (userInfo.isAdm) {
    next();
  } else {
    return res
      .status(401)
      .json({ message: "Você não tem permissão para acessar essa rota" });
  }

  next()


  /*try {

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      const userId = decoded.id;
      const userFinded = users.find((user) => user.id === userId);
      console.log(userId, userFinded)

      if (!userFinded.isAdm) {
        console.log('error')
        return res.status(401).json({ message: "Unauthorized" });
      }
      next();
    });
  } catch (error) {
    console.log(error);
  }*/
};

export default verifyAdminAuthMiddleware;
