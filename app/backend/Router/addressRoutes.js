const express=require('express')
const router=express.Router();
const addressController=require('./../Controller/addressController')

router.route('/')
// .get(addressController.getAddressById)
.post(addressController.createAddress)
// .post(addressController.createAddressProduct)

router.route('/:id')
.get(addressController.getAddressById)
.put(addressController.updateAddress)


module.exports=router