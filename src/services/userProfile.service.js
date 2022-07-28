import jwt from "jsonwebtoken"
import users from "../database/users";

const userProfileService = (token) => {

    const userFromToken = jwt.decode(token)
    const objectToReturn = {}

    const userInfo = users.find((user) => user.email === userFromToken.email)

    if(userInfo) {

        const {
            id,
            email,
            name,
            isAdm,
            createdOn,
            updatedOn
        } = userInfo

        objectToReturn.answer = {
            id,
            email,
            name,
            isAdm,
            createdOn,
            updatedOn
        }
        objectToReturn.status = 200

    }

    return objectToReturn
}

export default userProfileService