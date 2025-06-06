const express=require('express')
const router=express.Router();
const favouriteController=require('./../Controller/favouriteController')

router.route('/')
.get(favouriteController.getAllFavouriteProduct)
.post(favouriteController.createFavouriteProduct)

router.route('/:id')
.get(favouriteController.getAllFavouriteProductById)
.post(favouriteController.deleteFavouriteProduct)


module.exports=router