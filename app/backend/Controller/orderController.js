const CatchError = require("../Classes/TryCatchErrorHandler")
const pool = require("../Pool/pool")


exports.getAllOrder=async(req,res,next)=>{
    try{

  const {rows}=await pool.query(`
SELECT * FROM orders
JOIN carts ON carts.id=orders.cart_id
JOIN products On products.id=orders.product_id`)
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
    const {product_id,total, shipping_id,cart_id,created_at}=req.body
    console.log(cart_id[0],'+++++++++++++++++++++++++++')
    console.log(product_id[1],'11111111111222222222222222333333',product_id.length)
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