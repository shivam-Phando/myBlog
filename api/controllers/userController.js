const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = {
  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      //validation
      if (!(name && email && password))
        return res.json({ msg: "all form filed is required" });

      // check user in db

      const oldUser = await User.findOne({ email: email });
      if (oldUser) return res.json({ msg: "user all ready exist" });
      //hash password;
      const hashPassword = await bcrypt.hash(password, 10);
      //save user
      const newUser = await new User({ name, email, password: hashPassword });
      await newUser.save();
      //generate token
      const token = jwt.sign(
        { id: newUser._id, name: newUser.name },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );
      res.status(200).json({
        msg: "user register successfully",
        data: newUser,
        accessToken: token,
      });
    } catch (error) {
      res.status(400).json({ msg: "something is error" });
    }
  },

  login: async (req, res) => {
    try {
      console.log(req.body)
      const { email, password } = req.body;

      // validation

      if (!(email && password))
        return res.json({ msg: "all form field is required" });

      //check user in db
      const user = await User.findOne({ email: email });
      
      if(!user) return res.json({msg:"user not exist"});
      //check password
      const validPassword = await bcrypt.compare(password,user.password) ;
      
      if(!validPassword) return res.json({msg:"wrong password"});
      //generate token 
      const token = await jwt.sign({user:user.email,id:user._id},process.env.SECRET_KEY,{expiresIn:"5h"});
      
      if(token)res.json({msg:"user login successfully", accessToken:token})
      
    } catch (error) {
      res.status(400).json({ msg: "something is error" });
    }
  },
};

module.exports = userController;
