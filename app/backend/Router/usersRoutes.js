const express=require('express')
const router=express.Router();
const userController=require('./../Controller/userController')

router.route('/')
.get(userController.getAllUsers)
.post(userController.uploadUserPicture,userController.signUp)


module.exports=router