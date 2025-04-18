const pool = require("../Pool/pool")

exports.getAllPaymentData=async(req,res,next)=>{
    try{
   const {rows}=await pool.query(`SELECT * FROM payments`)
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

exports.createPaymentData=async(req,res,next)=>{
    try{
           const {order_id,user_id,method}=req.body
         
     const {rows}=await pool.query(`INSERT INTO payments (order_id,user_id,method) VALUES ($1,$2,$3) RETURNING *`,[order_id,user_id,method])
   
   
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