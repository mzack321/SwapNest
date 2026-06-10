
const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.post("/signup", async (req, res )=>{
    const {userName, email, password } = req.body;
    
    const userExist = await User.findOne({email});
    if(userExist){
        return res.json({
            message: "User already Exist"
        });
    }
    
    const hashpassword = await bcrypt.hash(password, 5);
    
    const user = await User.create({
        userName,
        email,
        password: hashpassword,
    });
    res.json({
        message: "Signup Success",
        user,
    });
});

module.exports = router;
