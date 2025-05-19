const AppError = require('../ErrorHandler/appError');
const pool=require('../Pool/pool');

exports.getAllCart=async(req,res,next)=>{
    try{
   const {rows}=await pool.query('SELECT * FROM products  JOIN carts ON products.id=carts.product_id;')
//    const {rows}=await pool.query('SELECT * FROM carts')

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
        const {product_id,productprice}=req.body
        if(!product_id){
                return next(new AppError('Can not find "product_id"',500))
            
            }
            const {rows}=await pool.query('INSERT INTO carts (product_id,productprice) VALUES ($1,$2) RETURNING *',[product_id,productprice])
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



exports.deleteCurrentCart=async(req,res,next)=>{
    try{
        
        const {id}=req.params
        console.log(id,'17^%$&&#&&1111111111111111111111111111113434444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441111111111111112222222222222222222')

    //  const {name}=req.params
       const {rows}=await pool.query("DELETE FROM carts WHERE id=$1 ",[id])
    
        res.status(200).json({
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


exports.handleUpdate=async(req,res,next)=>{
    try{
        
        const {id}=req.params
        const {quanitiy,sumPrice}=req.body
        console.log(id,quanitiy,req.body,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    //  const {name}=req.params
       const {rows}=await pool.query("UPDATE  carts SET quantity=$1,productprice=$2 WHERE id=$3 ",[quanitiy,sumPrice,id])
    
        res.status(200).json({
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