const CatchError = require("../Classes/TryCatchErrorHandler")
const pool = require("../Pool/pool")


exports.getAllOrder=async(req,res,next)=>{
    try{
  const {rows}=await pool.query(`SELECT * FROM orders`)
    }catch(err){
        CatchError(res,err)
    }
}

exports.createOrder=async(req,res,next)=>{
    try{
        const {user_id,product_id,total_price,status}=req.body
  const {rows}=await pool.query(`INSERT INTO orders(user_id,product_id,total_price,status)
     VALUES($1,$2,$3,$4$,$5)`,[user_id,product_id,total_price,status])
    }catch(err){
        CatchError(res,err)
    }
}