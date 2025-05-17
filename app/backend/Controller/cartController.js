const AppError = require('../ErrorHandler/appError');
const pool=require('../Pool/pool');

exports.getAllCart=async(req,res,next)=>{
    try{
   const {rows}=await pool.query('SELECT * FROM carts')
   console.log(rows[0])
   res.status(200).json({
    staatus:'success',
    data:rows
   })
    }catch(error){
        res.status(500).json({
            status:'fail',
            message:error.message
        })
    }
}

exports.createCart=async(req,res,next)=>{
    try{
        const {product_id}=req.body
        // if(!product_id){
            //     return next(new AppError('Can not find "product_id"',500))
            
            // }
            const {rows}=await pool.query('INSERT INTO carts (product_id) VALUES ($1) RETURNING *',[product_id])
            console.log(product_id)
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