import { Router } from "express";
import loginController from "../controllers/login.controller";
import verifyAllDataLoginMiddleware from "../middlewares/verifyDataLogin.middleware";

const router = Router();

router.post("", verifyAllDataLoginMiddleware, loginController);

export default router;
