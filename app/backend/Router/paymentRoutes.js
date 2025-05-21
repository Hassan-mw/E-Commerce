const express=require('express')
const router=express.Router();
const paymentController=require('./../Controller/paymentController')


router.route('/')
.get(paymentController.getAllPaymentData)


router.route('/:id')
.get(paymentController.getPaymentDataById)
.put(paymentController.updatepaymentData)
.post(paymentController.createPaymentData)

module.exports=router