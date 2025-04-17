const pool = require("../Pool/pool")


exports.getAllReviews=async(req,res,next)=>{
    try{

    }catch(err){
        
    }
}
exports.createReview=async(req,res,next)=>{
    try{
  const {user_id,product_id,description}=req.body
  console.log(description,user_id,product_id,'🚈🛹🦼🦼🦽🦽🦽🚲🚲🛹')
  const {rows}=await pool.query(`INSERT INTO reviews (description,user_id,product_id) VALUES($1,$2,$3) RETURNING *`,[description,user_id,product_id])
console.log(rows)
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