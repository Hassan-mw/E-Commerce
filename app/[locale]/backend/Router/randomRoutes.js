const express=require('express')
const router=express.Router();
const randomController=require('./../Controller/randomController')

  

router.route('/')
// .get(productController.getAllProducts)
.post(randomController.uploadProductPicture,randomController.createproduct)
// .post(randomController.uploadProductPicture,randomController.createproduct)



// router.route('/:name')
// .get(productController.getProductByName)
// .delete(productController.deleteProduct)




module.exports=router