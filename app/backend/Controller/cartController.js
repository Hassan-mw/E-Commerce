const AppError = require('../ErrorHandler/appError');
const Pool=require('../Pool/pool');

exports.getAllCart=async(req,resizeBy,next)=>{
    try{

    }catch(error){
        resizeBy.status(500).json({
            status:'fail',
            message:error.message
        })
    }
}

exports.createCart=async(req,res,next)=>{
    try{
        console.log(req.body,'It reached here')
        const {product_id}=req.body
        console.log(product_id)
        if(!product_id){
            return next(new AppError('Can not find "product_id"',500))
     
        }
    const {rows}=await Pool.query('INSERT INTO carts (product_id) VALUES ($1) RETURNING *',[product_id])
     res.status(401).json({
        staus:'success',
        data:rows[0]
     })
  
    }catch(error){
        res.status(500).json({
            status:'fail',
            message:error.message
        })
    }
}