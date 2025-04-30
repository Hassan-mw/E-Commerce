const express=require('express');
const router=express.Router()
const similarProductController=require('./../Controller/similarProductController')


router.route('/id')
.get(similarProductController.getAllSimilarProduct)

module.exports=router