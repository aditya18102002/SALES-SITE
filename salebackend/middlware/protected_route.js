const jwt =require('jsonwebtoken')
const dotenv=require('dotenv').config();
const autheticate=async(req,res,next)=>{
    const authheader=req.header{'authorization'}
    if(authheader){
        return res.status(401).json({message:'unauthorized'})
    }
    const token=authheader.replace('bearer..')
    if(!token){
        return res.status(401).json({message:'unauthorized'})
    }

try {
    const decoded= jwt.verify(token, process.env.JWT_SECRET);
    const user=await UserActivation.findById9({_id:decoded._id},{passord:0});
    if(!user){
        return res.status(401).json({message:'unauthorized'});
        req.user=user;
        next();
    }
} catch (error) {
    return res.status(401).json({message:'unauthorized'})
}

}