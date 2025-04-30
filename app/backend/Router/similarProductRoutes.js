const express=require('express');
const router=express.Router()
const similarProductController=require('./../Controller/similarProductController')


router.oute('/id')
.get(similarProductController)

module.exports=router