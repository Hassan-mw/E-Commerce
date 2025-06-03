const pool = require("../Pool/pool");
const bcrypt=require('bcryptjs')


const correctPassword=async(orignalPassword,userPassword)=>{
console.log(orignalPassword,userPassword,'#################')
// const a=1;
return await bcrypt.compare(userPassword,orignalPassword)
}


exports.login=async(req,res,next)=>{
    try{
    const {email,password}=req.body;
    const {rows}=await pool.query(`SELECT * FROM signup WHERE email=$1`,[email])
    // console.log(rows[0].password,'223344')
    // const {rows}=await pool.query(`SELECT * FROM signup WHERE email=$1 AND password=$2  `,[email,password])
    if(rows.length===0 ||  ! correctPassword(rows[0].password,password) ){
        res.status(500).json({
            status:'fail',
            message:'Incorrect email or password'
        })
    }

    
    res.status(200).json({
        status:'success',
        message:'Successfully login'
    })
    console.log(rows.length,'aaaaaaaaaaaaaaaa')
    }catch(err){
      console.log(err)
    }
}