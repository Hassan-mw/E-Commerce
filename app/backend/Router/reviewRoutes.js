const express=require('express')
const router=express.Router();
const reviewController=require('./../Controller/reviewController')

router.route('/')
.get(reviewController.getAllReviews)
.post(reviewController.createReview)

router.route('/:id')
.delete(reviewController.deleteReview)



module.exports=router