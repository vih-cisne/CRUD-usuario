const verifyAllDataCreateUserMiddleware = (req, res, next) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password || !req.body.hasOwnProperty("isAdm")) {
    return res
      .status(400)
      .json({ message: "Ummm, parece que alguma informação está faltando" });
  }

  next();
};

export default verifyAllDataCreateUserMiddleware;
