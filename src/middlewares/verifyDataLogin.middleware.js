

const verifyAllDataLoginMiddleware = (req,res, next) => {

    const { email, password } = req.body

    if( !email || !password ) {
        
        return res.status(400).json({ message: "Ummm, parece que alguma informação está faltando"})

    }

    next()

}

export default verifyAllDataLoginMiddleware