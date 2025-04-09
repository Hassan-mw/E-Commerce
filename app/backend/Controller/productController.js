const pool=require('../Pool/pool');
const path=require('path');
const multer=require('multer');

const uploadPath=path.join(__dirname,"../../../public")

const multerStorage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,uploadPath)
  },
  filename:(req,file,cb)=>{
    const ext=file.mimetype.split('/')[1];
    cb(null,`userr_${Date.now()}.${ext}`)
  }
})

const multerFilter=(req,file,cb)=>{
  if(file.mimetype.startsWith('image')){
    cb(null,true)
  }
  else{
    cb(,false)
  }
}




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