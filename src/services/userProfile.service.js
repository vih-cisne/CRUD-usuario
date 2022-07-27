import jwt from "jsonwebtoken"
import users from "../database/users";

const userProfileService = (token) => {

    const userFromToken = jwt.decode(token)
    const objectToReturn = {}

    const userInfo = users.find((user) => user.email === userFromToken.email)

    if(userInfo) {

        objectToReturn.answer = {user: userInfo}
        objectToReturn.status = 200

    }

    return objectToReturn
}

export default userProfileService