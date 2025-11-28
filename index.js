// step 1
const express=require('express');
require('dotenv').config()
//2
const app=express();
const cors = require('cors')
// cross origin resource sharing
app.use(cors());
// app.use(cors("http://localhost:4000"));
app.use(express.json());

//3
const connectToMongo=require('./db')
connectToMongo();

//4
const portnb=process.env.PORT;
app.listen(portnb,()=>{
    console.log("server is running on the port:"+ portnb)
});

//5
app.get('/api',(req,res)=>{
    res.send("Hello Postman")
});

app.get('/api1',(req,res)=>{
    res.send("hi....there")
});

app.use('/api/user' , require("./Routes/UserRoute"))
app.use('/api/category', require("./Routes/CategoryRoute"))
app.use('/api/product', require("./Routes/ProductRoute"))
app.use('/api/student', require("./Routes/StudentRoute"))
app.use('/api/image/', express.static("./Uploads"))