const pool = require("../Pool/pool")

exports.getAllPaymentData=async(req,res,next)=>{
    try{
   const {rows}=await pool.query(`SELECT * FROM payment`)
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


exports.getPaymentDataById=async(req,res,next)=>{
    try{
   const {id}=req.params
   console.log(id,'from get paymentdata by id')
   const {rows}=await pool.query(`SELECT * FROM payment WHERE user_id = $1 `,[id])
   console.log(rows)
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
    const {method}=req.body
    const {id}=req.params
     const {rows}=await pool.query(`INSERT INTO payment (user_id,method) VALUES ($1,$2) RETURNING *`,[id,method])
   
   
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


exports.updatepaymentData=async(req,res,next)=>{
    try{
   const {method}=req.body
   const {id}=req.params
        const {rows}=await pool.query('UPDATE payment SET method=$1 WHERE user_id=$2 RETURNING *',[method,id])
        console.log(req.body,'It reached here')
     res.status(401).json({
        staus:'success',
        data:rows[0]
     })
  
    }catch(error){
        console.log(error)
        res.status(500).json({
            status:'fail',
            message:error.message
        })
    }
}