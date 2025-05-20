const pool = require("../Pool/pool")


exports.getAddressById=async(req,res,next)=>{
    try{
        // console.log(read.params,'FROM address ',$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$)
        const {id}=req.params;
        console.log(id,'aaagohsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddp')
    
    const {rows}=await pool.query(`SELECT * FROM address  WHERE user_id=$1`,[id])
    if(rows.length===0){
     res.status(200).json({
     status:'fail',
     data:[]
     })
     }else{
     res.status(200).json({
     status:'success',
     data:rows[0]
     }) 
     }
    

     


    }catch(err){
    res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
}

exports.createAddress=async(req,res,next)=>{
 try{
    console.log(req.body,111111111111111111112222222222222222222222222222222222222222222222223333333333333333333333333333333333333334444444444444444444)
const {email,firstName,lastName,country,state,address,phone}=req.body
//   if(!product_id){
//     return next(new AppError('Can not find "product_id"',500))
            
//   }
        const {rows}=await pool.query('INSERT INTO address (email,firstName,lastName,country,state,address,phone) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',[email,firstName,lastName,country,state,address,phone])
        console.log(req.body,'It reached here')
     res.status(401).json({
        staus:'success',
        data:rows[0]
     })
  
    }catch(error){
        console.log(error)
        res.status(500).json({
            status:'fail',
            message:error.message
        })
    }

}