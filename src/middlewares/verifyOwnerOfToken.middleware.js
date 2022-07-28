import jwt from "jsonwebtoken";
import users from "../database/users";

const verifyOwnerOfToken = (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(' ')[1];

  const userInfo = jwt.decode(token);

  if (userInfo.isAdm) {
    next();
  } else {
    const userOfId = users.find((user) => user.id === id);

    if (userOfId && userOfId.email !== userInfo.email) {
      return res
        .status(401)
        .json({
          message:
            "Você precisa ser administrador ou dono dos dados para ter acesso",
        });
    } else if(!userOfId) {
      return 
    }

    next();
  }
};

export default verifyOwnerOfToken;
