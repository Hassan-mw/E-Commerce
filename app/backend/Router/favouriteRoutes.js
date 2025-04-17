const express=require('express')
const router=express.Router();
const favouriteController=require('./../Controller/favouriteController')

router.route('/')
.get(favouriteController.createFavourite)