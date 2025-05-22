const pool = require("../Pool/pool")


exports.getAllShippingData=async(req,res,next)=>{
    try{


        const {rows}=await pool.query(`SELECT * FROM shippings`)
        if(!rows){
           new AppError('No shipping for product',400)
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
   const {name,time,cost,insurance,image}=req.body
    const {id}=req.params
    console.log(req.body,id)
     const {rows}=await pool.query(`INSERT INTO shipping (user_id,name,time,cost,insurance,image) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,[id,name,time,cost,insurance,image])
   
   
        res.status(201).json({
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


exports.getShippingDataById=async(req,res,next)=>{
    try{
   const {id}=req.params
   const {rows}=await pool.query(`SELECT * FROM shipping WHERE user_id = $1 `,[id])
   if(rows.length===0){
   res.status(200).json({
   status:'fail',
   data:[]
   }) 
   }
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



exports.updateShippingData=async(req,res,next)=>{
    try{
   const {name,time,cost,insurance,image}=req.body
   console.log(name,time,cost,insurance)
    const {id}=req.params
    console.log(req.body,id)
     const {rows}=await pool.query(`UPDATE  shipping SET name=$1,time=$2,cost=$3,insurance=$4,image=$5 WHERE user_id=$6 RETURNING *`,[name,time,cost,insurance,image,id])
   
   
        res.status(201).json({
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