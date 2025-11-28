const mongoose=require("mongoose")
require('dotenv').config()

const mongoURL=process.env.URI //we get this path from the mogocampas and we have to name the dabase name

const connectToMongo=async()=>{
    try{
        await mongoose.connect(mongoURL);
        console.log("connected to Mongo successfully");
    }
    catch{
        console.log("error in the connection",error)
    }
}
module.exports=connectToMongo;