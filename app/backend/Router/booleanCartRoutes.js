const express=require('express')
const router=express.Router();
const booleanCartController=require('./../Controller/booleanCartController')






router.route('/:show')
.get(booleanCartController.getAllBooleanCart)



module.exports=router