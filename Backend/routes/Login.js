

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({
        message: "Wrong Password",
      });

    }

    // JWT TOKEN

    const token = jwt.sign(

      {
        id: user._id,
        email: user.email,
      },

      "swapnestsecretkey",

      {
        expiresIn: "7d",
      }

    );

    res.status(200).json({

      message: "Login Success",

      token,

      user,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});

module.exports = router;