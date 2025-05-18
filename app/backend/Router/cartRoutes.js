const express=require('express')
const router=express.Router();
const cartController=require('./../Controller/cartController')



router.route('/')
.get(cartController.getAllCart)
.post(cartController.createCart)


router.route('/:id')
.delete(cartController.deleteCurrentCart)


module.exports=router