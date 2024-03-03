// ... (other imports)
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../user_model/User');

exports.register = async (req, res) => {
    try {
      if (!req.body.fname || !req.body.lname || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists. Please log in.' });
      }
  
      const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: hashedPassword,
      });
  
      const savedUser = await user.save();
  
      const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);
  
      res.status(200).json({
        token,
        user: {
          fname: user.fname,
          lname: user.lname,
          email: user.email,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
//   login
  exports.login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  
      res.status(200).json({
        token,
        user: {
          fname: user.fname,
          lname: user.lname,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
