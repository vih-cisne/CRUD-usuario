import express from "express"

const app = express()

const port = 3001
//3000 ?


app.get('/', (req,res) => {
    return res.status(200).send('Working')
})

app.listen(port)