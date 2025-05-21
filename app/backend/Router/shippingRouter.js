const express=require('express')
const router=express.Router();
const shippingController=require('./../Controller/shippingController')



router.route('/')
.get(shippingController.getAllShippingData)



router.route('/:id')
.get(shippingController.getShippingDataById) 
.post(shippingController.createShippingData) 


module.exports=router