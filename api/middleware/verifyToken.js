const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token = await req.headers["authorization"];
  

  try {
    if (token) {
      token = token.split(' ')[1];
       await jwt.verify(token, process.env.SECRET_KEY);
      return next();
    } else {
      return res.json({ msg: "unauthorized user" });
    }
  } catch (error) {
    res.json({ msg: "token is not valid" });
  }
};

module.exports = verifyToken;
