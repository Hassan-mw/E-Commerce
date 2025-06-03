const express=require('express')
const router=express.Router();
const loginController=require('./../Controller/loginController')



router.route('/')
.post(loginController.login)




module.exports=router