//this used for security purpose  authenticate and authorization
const jwt=require("jsonwebtoken")
require('dotenv').config()
const SECRET=process.env.SECRET_KEY;  //used to sign and verify jwt token

const authuser=async(req,res,next)=>{
    try {
        const userToken=await req.header("auth-token");
        if(userToken){
            const userdata= await jwt.verify(userToken,SECRET);
            req.userId=userdata;
            next();
        }else{
                res.json({success:false,message:"Unautherised Token"})
            }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Server error"})
        
    }
}

module.exports = authuser; 