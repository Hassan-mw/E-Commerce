const pool = require("../Pool/pool")


exports.getAllShippingData=async(req,res,next)=>{
    try{


        const {rows}=await pool.query(`SELECT * FROM shippings`)
        if(!rows){
           new AppError('No shipping for product',400)
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

exports.createShippingData=async(req,res,next)=>{
    try{
           const {user_id,product_id,order_id,address,city,country}=req.body
   
        const {rows}=await pool.query(`INSERT INTO shippings(user_id,product_id,order_id,address,city,country) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,[user_id,product_id,order_id,address,city,country])
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