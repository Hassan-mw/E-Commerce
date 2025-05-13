const AppError = require("../ErrorHandler/appError")
const pool = require("../Pool/pool")


exports.getAllReviews=async(req,res,next)=>{
    try{

       const {rows}=await pool.query(`SELECT * FROM reviews`)
       res.status(200).json({
         status:'success',
         length:rows.length,
         data:rows
       })
     }catch(err){
        res.status(500).json({
         status:'fail',
         message:err.message
        })     
      }
}


exports.createReview=async(req,res,next)=>{
    try{
      const {user_id,product_id,description}=req.body

    const {rows}=await pool.query(`INSERT INTO reviews (description,user_id,product_id) VALUES($1,$2,$3) RETURNING *`,[description,user_id,product_id])

        res.status(201).json({
        status:'success',
        data:rows[0]
        })

    }catch(err){

     res.status(201).json({
     status:'fail',
     message:err.message
     })
}
}


exports.deleteReview=async(req,res,next)=>{
    try{
   const {id}=req.params
  if(!id){
    new AppError('Please provide id',400)
  }
  const {rows}=await pool.query(`DELETE FROM reviews WHERE id=$1`,[id])
  console.log(rows)
  res.status(200).json({
    status:'success',
    message:'Review as deleted',
    data:rows[0]
  })
}catch(err){
   res.status(500).json({
    status:'fail',
    message:err.message
   })     
 }
}