const jwt=require('jsonwebtoken')
const pool = require("../Pool/pool")
const bcrypt=require('bcryptjs')

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

  const byscrptPassword=await bcrypt.hash(password,12)



  const {rows}=await pool.query(`INSERT INTO signup(name,email,password,created_at) VALUES  ($1,$2,$3,$4) RETURNING *`,[name,email,byscrptPassword,created_at])
  console.log(rows.id,11111111111111111,rows)

   const exptime='90d'
  const token=jwt.sign({id:rows[0].id},'asfasfjyiaf',{expiresIn:exptime})
  console.log(token,33534346346)
  res.status(201).json({
    status:'success',
    message:'succesfully created account',
    token
  })
  }catch(err){ 
     console.log(err)
  }
}