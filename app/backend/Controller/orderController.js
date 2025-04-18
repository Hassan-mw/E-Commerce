const CatchError = require("../Classes/TryCatchErrorHandler")
const pool = require("../Pool/pool")


exports.getAllOrder=async(req,res,next)=>{
    try{
  const {rows}=await pool.query(`SELECT * FROM orders`)
  
  res.status(200).json({
    status:'success',
    data:rows[0]
 }) 
    }catch(err){
         res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
}

exports.createOrder=async(req,res,next)=>{
    try{
        const {user_id,product_id,total_price,status}=req.body
      
  const {rows}=await pool.query(`INSERT INTO orders (user_id,product_id,total_price,status) VALUES ($1,$2,$3,$4) RETURNING *`,[user_id,product_id,total_price,status])


     res.status(201).json({
        status:'success',
        data:rows[0]
     })
    }catch(err){
         res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
}
exports.deleteOrder=async(req,res,next)=>{
    try{
        const {id}=req.params
      
  const {rows}=await pool.query(`DELETE FROM orders WHERE id=$1`,[id])


     res.status(200).json({
        status:'success',
        message:'successfully deleted order',
        data:rows[0]
     })
    }catch(err){
         res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
}