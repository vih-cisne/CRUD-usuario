import express from "express"
import loginController from "./controllers/login.controller";
import verifyAllDataLoginMiddleware from "./middlewares/verifyDataLogin.middleware";
import useRouter from "./routes/users.routes"

const app = express()
app.use(express.json());

const port = 3000

app.use("/users", useRouter)
app.post("/login", /*verifyAllDataLoginMiddleware,*/loginController)

app.listen(port)

export default app