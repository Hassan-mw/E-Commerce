const AppError = require('../ErrorHandler/appError');
const pool=require('../Pool/pool');

exports.getAllCart=async(req,res,next)=>{
    try{
   const {rows}=await pool.query('SELECT * FROM products WHERE id  IN (SELECT product_id FROM carts)')
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
        const {product_id}=req.body
        if(!product_id){
                return next(new AppError('Can not find "product_id"',500))
            
            }
            const {rows}=await pool.query('INSERT INTO carts (product_id) VALUES ($1) RETURNING *',[product_id])
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
       const {rows}=await pool.query("DELETE FROM carts WHERE product_id=$1 ",[id])
    
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
        const {quanitiy}=req.body
        console.log(id,quanitiy,'%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    //  const {name}=req.params
       const {rows}=await pool.query("UPDATE  carts SET quantity=$1 WHERE product_id=$2 ",[quanitiy,id])
    
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