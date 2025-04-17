const express=require('express')
const router=express.Router();
const reviewController=require('./../Controller/reviewController')

router.route('/')
.get(reviewController.getAllReviews)
.post(reviewController.createReview)



module.exports=router