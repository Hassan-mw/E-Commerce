const express=require('express')
const router=express.Router();
const addressController=require('./../Controller/addressController')

router.route('/')
.post(addressController.createAddress)
// .post(addressController.createAddressProduct)

// router.route('/:id')
// .post(addressController.deleteAddressProduct)


module.exports=router