const express=require('express')
const router=express.Router();
const orderController=require('./../Controller/orderController')

router.route('/')
.post(orderController.crea)


module.exports=router