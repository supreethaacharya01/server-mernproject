const express = require("express")
const {Adduser,Getuser,GetuserById, Deleteusers , Login,GetProfile, UpdateProfile} = require("../Controller/Usercontroller")
const router = express.Router();
const authuser = require("../Middleware/Authuser")


router.post("/Adduser" , Adduser) 
router.post("/Login" , Login) 
router.get('/Getuser' , Getuser)
router.get('/GetuserById/:uid' , GetuserById)
router.delete('/Deleteusers/:uid' , Deleteusers)
router.get('/GetProfile',authuser,GetProfile)
router.put('/UpdateProfile',authuser,UpdateProfile)



module.exports = router
