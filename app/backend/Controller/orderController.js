const { promisify } = require("util");
const CatchError = require("../Classes/TryCatchErrorHandler")
const pool = require("../Pool/pool")
const Cookies =require( "js-cookie");
const jwt=require('jsonwebtoken');

exports.protect=async(req,res,next)=>{
  try{
    const token=req.cookies.jwt;
     if(!token){
      res.status(401).json({
        status:'fail',
        message:'Please login first'
      })
     }

     const decode=await promisify(jwt.verify)(token,'asfasfjyiaf')
    //  console.log(decode,'$$$$$$$$$$$$$$$$$$$')

     const {rows}=await pool.query("SELECT * FROM signup WHERE id=$1",[decode.id])
    //  console.log(rows.length,'?????????????????')
     if(rows.length===0){
      res.status(400).json({
        status:'fail',
        message:"User does not exist"
      })
    }
      console.log(111111111111111,'At Last',3333333333333333)
      next();
  }catch(err){
    console.log(err)
  }
}


exports.getAllOrder=async(req,res,next)=>{
    try{
      const {rows}=await pool.query(`
        SELECT * FROM orders
        JOIN carts ON carts.id=orders.cart_id
        JOIN products On products.id=orders.product_id`)
        
        console.log('(((((((((((((((((first)))))))))))))))))')
   console.log(rows[0])
  res.status(200).json({
    status:'success',
    data:rows
 }) 
    }catch(err){
         res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
}



exports.createOrder=async(req,res,next)=>{
    try{
    console.log(req.body,'wwe2k26')
    const {id}=req.params;
    const {product_id,total, shipping_id,cart_id,created_at}=req.body
    let rows
    for(let z=0;z<=product_id.length-1;z++){

     rows=await pool.query(`INSERT INTO orders (user_id,product_id,total,cart_id, shipping_id,created_at) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,[id,product_id[z],total,cart_id[z], shipping_id,created_at])
     rows=await pool.query(`UPDATE  carts  SET show=false WHERE id=$1`,[cart_id[z]])
    }

  console.log(rows)

     res.status(201).json({
        status:'success',
        data:rows[0]
     })
    }catch(err){
        console.log(err)
         res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
}



exports.getOrderById=async(req,res,next)=>{
    try{
   const {id}=req.params
   console.log(id)
   const {rows}=await pool.query(`SELECT * FROM products WHERE id=$1`,[id])
     console.log(rows)
   res.status(200).json({
    status:'success',
    data:rows[0]
   })
    }catch(err){
    res.status(500).json({
       status:'fail',
       message:err.message
     })
    }
}



exports.deleteOrder=async(req,res,next)=>{
    try{
        const {id}=req.params
      
  const {rows}=await pool.query(`DELETE FROM orders WHERE id=$1`,[id])


     res.status(200).json({
        status:'success',
        message:'successfully deleted order',
        data:rows[0]
     })
    }catch(err){
         res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
}


// 

// SELECT * FROM orders
// JOIN carts ON carts.id=orders.cart_id
// JOIN products On products.id=orders.product_id