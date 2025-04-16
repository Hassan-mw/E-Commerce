
const jwt=require('jsonwebtoken')
const pool = require('../Pool/pool')





exports.getAllUsers=async()=>{
try{

}catch(err){
    
}
}




exports.signUp=async(req,res,next)=>{
try{
    
const x=req.body;
// const {photo}=req.file;
console.log(x)
const {rows}=await pool.query(`INSERT INTO users (name,phone,email,photo) VALUES ($1,$2,$3) RETURNING *`,[name,phone,email,photo])
console.log(rows,'😔😔😓😓😒😒🤤🤤😝😝😜😜')

// const token=jwt.sign({id:rows.id},process.env.JWT_SECRET,{expiresIn:90})
res.staus(200).json({
    status:'success',
    // token,
    // data:rows
})
}catch(err){

}
}