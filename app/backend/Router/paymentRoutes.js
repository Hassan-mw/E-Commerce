const express=require('express')
const router=express.Router();
const paymentController=require('./../Controller/paymentController')


router.route('/')
.get(paymentController.getAllPaymentData)
.post(paymentController.createPaymentData)

module.exports=router