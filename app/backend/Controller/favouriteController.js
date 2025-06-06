const AppError = require("../ErrorHandler/appError")
const pool = require("../Pool/pool")




exports.getAllFavouriteProduct=async(req,res,next)=>{
    try{


     const {rows}=await pool.query(`SELECT * FROM favourites`)
     if(!rows){
        new AppError('No favourite product',400)
     }
     res.status(200).json({
        staus:'success',
        data:rows[0]
     })
 
    }catch(err){
       res.status(500).json({
        status:'fail',
        message:err.message
       }) 
    }
}


exports.createFavouriteProduct=async(req,res,next)=>{
    try{
   const {user_id,product_id}=req.body
   const {rows}=await pool.query(`INSERT INTO favourites(user_id,product_id) VALUES($1,$2) RETURNING *`,[user_id,product_id])
   console.log(rows)
   res.status(201).json({
   staus:'success',
   data:rows[0]
   })
 
    }catch(err){
       res.status(500).json({
        status:'fail',
        message:err.message
       }) 
    }
}
exports.deleteFavouriteProduct=async(req,res,next)=>{
    try{
        const {id}=req.params

     const {rows}=await pool.query(`DELETE FROM favourites WHERE id=$1 RETURNING *`,[id])
     console.log(rows)
     res.status(200).json({
        staus:'success',
        message:'favourites product removed successfully',
        data:rows[0]
     })
 
    }catch(err){
       res.status(500).json({
        status:'fail',
        message:err.message
       }) 
    }
}



