



exports.createFavourite=async(req,res,next)=>{
    try{
        const {user_id,product_id}=req.body
     
   

    }catch(err){
       res.staus(500).json({
        status:'fail',
        message:err.message
       }) 
    }
}



