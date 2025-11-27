const express = require("express")
const {AddProduct, Getproduct, GetproductById, Updateproduct, Deleteproduct }=require('../Controller/ProductController');
const upload =require('../Middleware/Upload')
const router = express.Router();


router.post("/AddProduct" , upload.single('pimage'), AddProduct) 
router.get("/Getproduct" , Getproduct) 
router.get("/GetproductById/:pid" , GetproductById) 
router.put("/Updateproduct/:pid" ,upload.single('pimage'), Updateproduct) 
router.delete("/Deleteproduct/:pid" , Deleteproduct) 

module.exports = router
