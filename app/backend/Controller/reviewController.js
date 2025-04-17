const pool = require("../Pool/pool")


exports.getAllReviews=async(req,res,next)=>{
    try{

    }catch(err){
        
    }
}
exports.createReview=async(req,res,next)=>{
    try{
  const {description}=req.body
  console.log(description,'🚈🛹🦼🦼🦽🦽🦽🚲🚲🛹')
  const {rows}=await pool.query(`INSERT INTO reviews VALUE($1) RETURNING *`,[description])

  
    }catch(err){

    }
}