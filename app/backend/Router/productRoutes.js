const express=require('express')
const router=express.Router();
const productController=require('./../Controller/productController')

  

router.route('/')
.get(productController.getAllProducts)
.post(productController.uploadProductPicture,productController.createproduct)



router.route('/:name')
.get(productController.getProductByName)
.delete(productController.deleteProduct)




module.exports=router