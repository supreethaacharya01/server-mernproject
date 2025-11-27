// importing mongoose
const mongoose = require('mongoose')

// to create a table
const UserSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    address:{type:String},
    password:{type:String},
    date:{type:Date, default:Date.now}
   
})
// to create a user table in db
module.exports = mongoose.model("User",UserSchema)