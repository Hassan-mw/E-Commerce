const express=require('express')
const router=express.Router();
const controller=require('./../Controller/productController')



router.route('/')
.get(controller.getAllProducts)
.post(controller.createproduct)



module.exports=router