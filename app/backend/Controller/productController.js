const pool=require('../Pool/pool')

exports.getAllProducts = async (req,res,next) => {
    try {
     const {rows}=await pool.query("SELECT * FROM products")
      res.status(200).json({
        status: 'success',
        data: rows, // you can put your products array here
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong!',
      });
    }
  };
  

  exports.createproduct=async(req,res,next)=>{
 try{

 }catch(err){
  console.err(err)
  res.status(500)
  .json({
    status:'error',
    message:"Someting wentwrong"
  })
 }
  }