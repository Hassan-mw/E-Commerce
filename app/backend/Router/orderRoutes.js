const express=require('express')
const router=express.Router();
const orderController=require('./../Controller/orderController')

router.route('/')
.get(orderController.getAllOrder)
.post(orderController.createOrder)


router.route('/:id')
.delete(orderController.deleteOrder)



module.exports=router