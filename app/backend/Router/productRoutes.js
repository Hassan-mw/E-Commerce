const express=require('express')
const router=express.Router();
const controller=require('./../Controller/productController')
console.log('🤪🤪🤪🤪🤪🤪🤪🤪🤪')
router.route('/')
.get(controller.getAllProducts)

module.exports=router