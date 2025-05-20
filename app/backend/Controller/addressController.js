const pool = require("../Pool/pool")



exports.createAddress=async(req,res,next)=>{

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