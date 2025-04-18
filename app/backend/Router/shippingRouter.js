const express=require('express')
const router=express.Router();
const shippingController=require('./../Controller/shippingController')

router.route('/')
.get(shippingController.getAllShippingData)
module.exports=router