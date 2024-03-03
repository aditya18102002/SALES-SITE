// Import the jsonwebtoken package
const jwt = require('jsonwebtoken');

// Define the middleware function
module.exports = function(req, res, next) {
  // Get the token from the header of the request
  const token = req.header('Authorization');

  // If there's no token, return an error message
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // If there's a token, try to verify it
  try {
    // If the token is valid, the decoded payload is returned
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);

    // Add the user from the token's payload to the request object
    req.user = decoded.user;

    // Call the next middleware function
    next();
  } catch (err) {
    // If the token is not valid, return an error message
    res.status(500).json({ message: 'Token is not valid' });
  }
};


// ----------

// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv').config();
// // const UserActivation = require('path_to_UserActivation_model'); // Replace 'path_to_UserActivation_model' with the actual path to your UserActivation model

// const authenticate = async (req, res, next) => {
//     const authHeader = req.headers['authorization']; // Use square brackets instead of curly braces
//     if (!authHeader) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const token = authHeader.replace('Bearer ', ''); // Correct the token extraction
//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await UserActivation.findById(decoded._id, { password: 0 }); // Correct the findById arguments
//         if (!user) {
//             return res.status(401).json({ message: 'Unauthorized' });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
// };

// module.exports = authenticate;





// const jwt =require('jsonwebtoken')
// const dotenv=require('dotenv').config();
// const autheticate=async(req,res,next)=>{
//     const authheader=req.header{'authorization'}
//     if(authheader){
//         return res.status(401).json({message:'unauthorized'})
//     }
//     const token=authheader.replace('bearer..',"")
//     if(!token){
//         return res.status(401).json({message:'unauthorized'})
//     }

// try {
//     const decoded= jwt.verify(token, process.env.JWT_SECRET);
//     const user=await UserActivation.findById({_id:decoded._id},{passord:0});
//     if(!user){
//         return res.status(401).json({message:'unauthorized'});
//         req.user=user;
//         next();
//     }
// } catch (error) {
//     return res.status(401).json({message:'unauthorized'})
// }

// }