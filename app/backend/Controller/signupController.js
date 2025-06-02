


exports.createUser=async(req,res,next)=>{
  try{

  const {name,email,password}=req.body;

  if(!name || !email || ! password){
    res.status(500).json({
        status:'fail',
        message:'Does not provide email or password'
    })
    console.log(name,email.password)
  }

  }catch(err){

  }
}