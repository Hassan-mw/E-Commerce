

exports.getAllShippingData=async(req,res,next)=>{
    try{


        const {rows}=await pool.query(`SELECT * FROM payments`)
        if(!rows){
           new AppError('No payment for product',400)
        }
        res.status(200).json({
           staus:'success',
           data:rows[0]
        })
    
       }catch(err){
          res.status(500).json({
           status:'fail',
           message:err.message
          }) 
       }
}

exports.createShippingData=async(req,res,next)=>{
    try{
           const {user_id,product_id}=req.body
   
        const {rows}=await pool.query(`INSERT INTO favourites(user_id,product_id) VALUES($1,$2) RETURNING *`,[user_id,product_id])
        console.log(rows)
        res.status(201).json({
           staus:'success',
           data:rows[0]
        })
    
       }catch(err){
          res.status(500).json({
           status:'fail',
           message:err.message
          }) 
       }
}