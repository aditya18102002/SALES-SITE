const bcrypt = require('bcrypt')
const User = require('../user_model/user');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
// const user = require('../user_model/user');

const register = async (req, res) => {

    try {
        //get data from request body
        const { fname, lname, email, password } = req.body;
        if (!fname || !lname || !email || !password) {
            return res.status(400).json({
                massage: "all field are required"
            })
        }
        //check email will be unique
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                massage: "user already registered with this email"
            })
        }
        const hashPassword = await bcrypt.hash(password, 15);
        const newUser = new User({ fname, lname, email, password: hashPassword });
        const resp = await newUser.save();
        res.status(201).json({ massage: "register succesful", resp })
    } catch (error) {
        res.status(500).json({ massage: "error occured while registration", error })

    }
}
const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ massage: "email and password reqired" });
        }
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ massage: "email not register yet .." });
        }
        const match = await bcrypt.compare(password, user.password);
        if (match)
        {
            const token = await jwt.sign(user.email, process.env.JWT_SECRET);
            return res.status(200).json({ massage: "log in success ..",token});
        }
   else
{
    return res.status(400).json({ massage: "email and password incorrect .." });
}
   } catch (error) {

    console.log(error);
    return res.status(500).json({ massage: "error in login" });
}
}

module.exports = {
    register, login
}