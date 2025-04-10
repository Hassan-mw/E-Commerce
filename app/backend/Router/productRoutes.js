const express=require('express')
const router=express.Router();
const controller=require('./../Controller/productController')


router.route('/')
.get(controller.getAllProducts)
.post(controller.uploadProductPicture,controller.createproduct)



router.route('/:id')
.delete(controller.deleteProduct)




module.exports=router