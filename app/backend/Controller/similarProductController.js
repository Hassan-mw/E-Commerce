const pool = require("../Pool/pool")



exports.getAllSimilarProduct=async(req,resizeBy,next)=>{
    try{
        console.log(req.params)
        const {id}=req.params
        const {rows}=await pool.query('SELECT * FROM similarProducts WHERE product_id=$1',[id])
    
   }catch(error){

    res.staus(500).json({
    status:'fail',
    message:error.message
   })
    }
}