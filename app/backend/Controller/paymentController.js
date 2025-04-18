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