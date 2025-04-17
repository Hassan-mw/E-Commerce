const express=require('express')
const router=express.Router();
const favouriteController=require('./../Controller/favouriteController')

router.route('/')
.post(favouriteController.createFavourite)

router.route('/:id')
.post(favouriteController.deleteFavourite)


module.exports=router