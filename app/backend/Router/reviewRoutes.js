const express=require('express')
const router=express.Router();
const reviewController=require('./../Controller/reviewController')

router.router('/')
.get(reviewController.getAllReviews)
.post(reviewController.createReview)



module.exports=router