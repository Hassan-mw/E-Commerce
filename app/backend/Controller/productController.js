const pool=require('../Pool/pool');
const path=require('path');
const multer=require('multer');
const  AppError=require('./../ErrorHandler/appError') 
const express=require('express')
const app=express()

// const uploadPath=path.join(__dirname,"../../../public")

// const multerStorage=multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null,uploadPath)
//   },
//   filename:(req,file,cb)=>{
//     const ext=file.mimetype.split('/')[1];
//     cb(null,`userr_${Date.now()}.${ext}`)
//   }
// })

// const multerFilter=(req,file,cb)=>{
//   if(file.mimetype.startsWith('image')){
//     cb(null,true)
//   }
//   else{
//     cb(new AppError("Not an iage ! please upload an image"),false)
//   }
// }


// const upload=multer({
//   storage:multerStorage,
  // fileFilter:multerFilter
// })


// exports.uploadProductPicture=upload.single('image')


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
console.log('╰(*°▽°*)╯^_^^_^')
  
exports.createproduct=async(req,res,next)=>{
    try{
  const {rows}=await pool.query('INSERT INTO products()')


   }catch(err){
  console.err(err)
  res.status(500)
  .json({
    status:'error',
    message:"Someting wentwrong"
  })
 }
}


// ! GLobal Error Middleware
app.all('*',(req, res, next)=>{
  res.status(500).send("some thing was broken!")

  // next(new AppError("Can't find this page", 404));
});


app.use((err,req,res,next)=>{

  res.status(500).send("some thing was broken!")
})
