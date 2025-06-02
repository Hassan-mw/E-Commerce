const express=require('express')
const router=express.Router();
const signupController=require('./../Controller/signupController')



router.route('/')
.post(signupController.createUser)




module.exports=router