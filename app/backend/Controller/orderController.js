const CatchError = require("../Classes/TryCatchErrorHandler")
const pool = require("../Pool/pool")


exports.getAllOrder=async(req,res,next)=>{
    try{

  const {rows}=await pool.query(`SELECT * FROM orders`)
//   const {rows}=await pool.query(`SELECT * FROM orders JOIN carts ON carts.id = ANY (orders.product_id)  `)


//SELECT * FROM products  JOIN carts ON products.id=carts.product_id

//   const {rows}=await pool.query(`SELECT * 
// FROM carts 
// WHERE carts.id = ANY (SELECT unnest(product_id) FROM orders)`)

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
        const {product_id,total, shipping_id,cart_id}=req.body

  const rows=await pool.query(`INSERT INTO orders (user_id,product_id,total,cart_id, shipping_id) VALUES ($1,$2,$3,$4,$5) RETURNING *`,[id,product_id,total,cart_id, shipping_id])
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