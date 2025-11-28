const Users = require("../Models/UserModel")
const bcrypt=require("bcryptjs")  //hash the password
const jwt=require('jsonwebtoken')    //
const SECRET=process.env.SECRET_KEY;

// post the user details
const Adduser = async(req,res) =>{
    try {
        
        const{uname,uemail,upassword,uaddress,uphone} = req.body;
        const hashpassword= await bcrypt.hash(upassword,10)
        const newuser = new Users({
            name:uname,
            email:uemail,
            password:hashpassword,
            address:uaddress,
            phone:uphone

        }) 
        await newuser.save();
        res.status(201).json({message:"user created" , newuser})
        // console.log("User Added!!!!!!!!!!!!!!!!")
    
    } catch (err) {
        res.status(500).json({message:"server error",err})
    //    console.log(err) 
    }
}

// get the user details
const Getuser =async(req,res)=>{
   try {
     const getusers =await Users.find(); //fetch users
     res.status(200).json({message:"all users fetched", getusers})
    console.log( getusers)
    
   } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    console.log(error)
   }
}

// get the single user details by their id
const GetuserById = async(req,res)=>{
    try {
        const {uid}= req.params; //get id from url
        const oneuser = await Users.findById(uid);
        if(!oneuser){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({message:"user found",oneuser})
        console.log(oneuser)

    } catch (error) {
         res.status(500).json({message:"server error",error})
      console.log(error)  
    }
}

//to delete users 
const Deleteusers=async(req,res)=>{
    try {
        const {uid}= req.params; 
        const deleteuser=await  Users.findByIdAndDelete(uid);
         res.status(200).json({message:"user deleted",deleteuser})
    } catch (error) {
        console.log(error) 
    }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const matcheduser = await Users.findOne({ email });

    if (!matcheduser) {
      return res.json({ success: false, message: "Invalid user" });
    }

    const checkpass = await bcrypt.compare(password, matcheduser.password);
    if (!checkpass) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const Token = jwt.sign({ id: matcheduser.id }, SECRET);

    res.json({
      success: true,
      message: "Login successfully",
      Token,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
};

const GetProfile=async(req,res)=>{
try {
    const iduser = req.userId.id;
    const user=await Users.findById(iduser);
    if(!user){
        return(
            res.status(404).json({message:"user not found"})
        )
    }
    res.status(200).json({message:"user  found" , user})
} catch (error) {
    console.log(error)
    res.status(500).json({message:"server error"})
}
}

const UpdateProfile=async(req,res)=>{
    try {
        const iduser = req.userId.id;
    const user=await Users.findById(iduser);
    if(!user){
        return(
            res.status(404).json({message:"user not found"})
        )
    }
    // res.status(200).json({message:"user  found" , user})
  const updateform = {
    name: req.body.uname,
    email: req.body.uemail,
    phone: req.body.uphone,
    address: req.body.uaddress,
};
    const updateprofile= await Users.findByIdAndUpdate(iduser,updateform,{new:true})
    res.status(200).json({message:"profile updated successfully",users:updateprofile})

    } catch (error) {
        res.status(500).json({message:"server error"})
    }
}
module.exports = {Adduser, Getuser, GetuserById , Deleteusers , Login, GetProfile, UpdateProfile};