const mongoose=require("mongoose")

const mongoURL="mongodb://localhost:27017/crud"  //we get this path from the mogocampas and we have to name the dabase name

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