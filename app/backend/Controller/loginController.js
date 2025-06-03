const pool = require("../Pool/pool");

exports.login=async(req,res,next)=>{
    try{
    const {email,password}=req.body;
    const {rows}=await pool.query(`SELECT * FROM signup WHERE email=$1 AND password=$2  `,[email,password])
    if(rows.length===0){
        res.status(500).json({
            status:'fail',
            message:'Incorrect email or password'
        })
    }
    console.log(rows.length,'aaaaaaaaaaaaaaaa')
    }catch(err){
      console.log(err)
    }
}