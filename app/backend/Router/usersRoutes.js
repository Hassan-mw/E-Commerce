const express=require('express');
const router=express.Router();
const userController=require('./../Controller/userController')

console.log('first')
router.route('/')
.get(userController.getAllUsers)
.post(userController.signUp)


module.exports=router