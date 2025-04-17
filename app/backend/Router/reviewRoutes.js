const express=require('express')
const router=express.Router();
const reviewController=require('./')

router.router('/')
.get(reviewController)