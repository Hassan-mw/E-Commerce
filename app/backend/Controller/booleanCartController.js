
const pool=require('../Pool/pool');

exports.getAllBooleanCart=async(req,res,next)=>{
    try{
  const {show}=req.params
  console.log(show,1111111111111111112222222222222222222222333333333)
 const {rows}=await pool.query(`SELECT * FROM products  JOIN carts ON products.id=carts.product_id WHERE carts.show=${show}`)
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
