import express from "express"
import loginRouter from "./routes/login.routes";
import useRouter from "./routes/users.routes"

const app = express()
app.use(express.json());

const port = 3000

app.use("/users", useRouter)
app.use("/login", loginRouter)

app.listen(port)

export default app