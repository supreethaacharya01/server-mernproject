const students=require("../Models/StudentModel")

const AddStudent = async(req ,res)=>{
    try {
        const{stname, stemail, stpassword, staddres,stphone, stregistration}=req.body;

   const newstud= new students({
    sname:stname,
    semail:stemail,
    spassword:stpassword, 
    saddress:staddres,
    sphone:stphone, 
    sregistration:stregistration,
   })

   await newstud.save();
   console.log("student added")
    } 
    catch (error) {
        console.log(error)  
    }
   
}

module.exports=AddStudent;
