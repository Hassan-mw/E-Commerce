const jwt=require('jsonwebtoken')
const pool = require("../Pool/pool")


exports.createUser=async(req,res,next)=>{
  try{

  const {name,email,password,created_at}=req.body;

  if(!name || !email || ! password){
    res.status(500).json({
        status:'fail',
        message:'Does not provide email or password'
    })
    console.log(name,email.password)
  }
  // console.log(req.body)
  const {rows}=await pool.query(`INSERT INTO signup(name,email,password,created_at) VALUES  ($1,$2,$3,$4) RETURNING *`,[name,email,password,created_at])
  console.log(rows.id,11111111111111111,rows)
  const token=jwt.sign({id:password},'asfasfjyiaf',{expiresIn:120})
  console.log(token,33534346346)
  res.status(201).json({
    status:'success',
    message:'succesfully created account'
  })
  }catch(err){

  }
}