
const pool=require('../Pool/pool');

exports.getAllBooleanCart=async(req,res,next)=>{
    try{
  const {show}=req.params
 const {rows}=await pool.query(`SELECT * FROM products  JOIN carts ON products.id=carts.product_id WHERE carts.show=${show}`)

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
