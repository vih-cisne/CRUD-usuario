import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserControler from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import userProfileController from "../controllers/userProfile.controller";
import verifyAdminAuthMiddleware from "../middlewares/verifyAdminAuth.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyAllDataCreateUserMiddleware from "../middlewares/verifyDataCreateUser.middleware";
import verifyEmailExistenceMiddleware from "../middlewares/verifyEmailExistence.middleware";
import verifyOwnerOfToken from "../middlewares/verifyOwnerOfToken.middleware";

const router = Router();

router.post(
  "",
  verifyAllDataCreateUserMiddleware,
  verifyEmailExistenceMiddleware,
  createUserController
);
router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyAdminAuthMiddleware, listUsersController
);
router.get("/profile", verifyAuthTokenMiddleware, userProfileController);
router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyOwnerOfToken,
  updateUserController
);
router.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyOwnerOfToken,
  deleteUserControler
);

export default router;
