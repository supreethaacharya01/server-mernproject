const express=require("express");
const app=express();   //to create the port number




// importing other files syntax
//  for single function const welcome=require("./path")

// for multiple function
const {Welcome, Exporting}= require("./testing");



function Hello(){
    console.log("Welcome to node js")
}
Hello();
Welcome();
Exporting();


const connectToMongo=require('./db')
connectToMongo();

const port=2000;
app.listen(port, ()=> {
console.log('.......')
console.log("Server is running on the port: " + port);
})  //listen is a function provided by the express  tell the app to run server