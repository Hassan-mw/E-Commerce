
// const jwt=require('jsonwebtoken')
const pool = require('../Pool/pool')





// exports.getAllUsers=async()=>{
// try{

// }catch(err){
    
// }
// }




exports.signUp=async (req,res,next) => {
try{
   
const name=req.body?.name;
// const {photo}=req.file;
console.log(name,req.body)
// const {rows}=await pool.query(`INSERT INTO users (name,phone,email,photo) VALUES ($1,$2,$3) RETURNING *`,[name,phone,email,photo])
// console.log(rows,)

// const token=jwt.sign({id:rows.id},process.env.JWT_SECRET,{expiresIn:90})
res.status(201).json({
    status: 'success',
    // data: result.rows[0]
  });
}catch(err){
console.error(err)
}
}