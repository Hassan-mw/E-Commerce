const AppError = require("../ErrorHandler/appError")
const pool = require("../Pool/pool")




exports.getAllFavouriteProduct=async(req,res,next)=>{
    try{


     const {rows}=await pool.query(`SELECT * FROM products WHERE products.id IN (SELECT  product_id FROM favourites)`)
     if(!rows){
        new AppError('No favourite product',400)
     }
     res.status(200).json({
        staus:'success',
        data:rows
     })
 
    }catch(err){
       res.status(500).json({
        status:'fail',
        message:err.message
       }) 
    }
}


exports.getAllFavouriteProductById=async(req,res,next)=>{
    try{
    const {id}=req.params
     const {rows}=await pool.query(`SELECT * FROM favourites WHERE product_id=$1`,[id])
     if(!rows){
        new AppError('No favourite product',400)
     }
     res.status(200).json({
        staus:'success',
        data:rows
     })
 
    }catch(err){
       res.status(500).json({
        status:'fail',
        message:err.message
       }) 
    }finally{
      redirect('/favourite')
    }
}


exports.createFavouriteProduct=async(req,res,next)=>{
    try{
      console.log(req.body)
   const {user_id,product_id}=req.body
   const {rows}=await pool.query(`INSERT INTO favourites(user_id,product_id) VALUES($1,$2) RETURNING *`,[user_id,product_id])
   console.log(rows)
   res.status(201).json({
   staus:'success',
   data:rows[0]
   })
 
    }catch(err){
      console.log(err)
       res.status(500).json({
        status:'fail',
        message:err.message
       }) 
    }
}


exports.deleteFavouriteProduct=async(req,res,next)=>{
    try{
      console.log(req.params,'its reaching here')
        const {id}=req.params
   console.log(id)
     const {rows}=await pool.query(`DELETE FROM favourites WHERE product_id=$1 RETURNING *`,[id])
     console.log(rows)
     res.status(200).json({
        staus:'success',
        message:'favourites product removed successfully',
        data:rows[0]
     })
 
    }catch(err){
      console.log(err)
       res.status(500).json({
        status:'fail',
        message:err.message
       }) 
    }
}



