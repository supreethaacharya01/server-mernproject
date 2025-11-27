const mongoose=require("mongoose")

const Studentschema = new mongoose.Schema({
    sname:{type:String},
    semail:{type:String},
    spassword:{type:String},
    saddress:{type:String},
    sphone:{type:Number},
    sregistration:{type:Number}

})

module.exports=mongoose.model("Student",Studentschema);