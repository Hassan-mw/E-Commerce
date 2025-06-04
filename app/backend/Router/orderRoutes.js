const express=require('express')
const router=express.Router();
const orderController=require('./../Controller/orderController')

router.route('/')
.get(orderController.getAllOrder)
// .post(orderController.createOrder)


router.route('/:id')
.post(orderController.createOrder)
// .post(orderController.protect,orderController.createOrder)
.get(orderController.getOrderById)
.delete(orderController.deleteOrder)



module.exports=router