

const jwt=require('jsonwebtoken')
const multer = require('multer')
const pool = require('../Pool/pool');
const AppError = require('../ErrorHandler/appError');
const fs=require('fs').promises;
const path = require('path');



exports.getAllUsers=async()=>{
try{

}catch(err){
    
}
}

const multerStorage=multer.memoryStorage();
const multerFilter=(req,file,cb)=>{
  if(file.mimetype.startsWith('image')){
    cb(null,true)
  }else{
    cb(new AppError('Not an image! Please upload an image'))
  }
}
const upload=multer({
  storage:multerStorage,
  fileFilter:multerFilter
})

exports.uploadUserPicture=upload.single('image')



exports.signUp=async (req,res,next) => {
  let filePath;
try{
   
// const {name,email,phone}=req.body
// const {photo}=req.file;
const ext=req.file.mimetype.split('/')[1]
const fileName=`user_${Date.now()}.${ext}`
 filePath=path.join(__dirname,'../../../public',fileName)
await fs.writeFile(filePath,req.file.buffer)
const {rows}=await pool.query(`INSERT INTO users (name,phone,email,image) VALUES ($1,$2,$3,$4) RETURNING *`,
  [req.body.name,req.body.phone,req.body.email,fileName])


 const token=jwt.sign({id:rows.id},'abcdefghikl',{expiresIn:90})
res.status(201).json({
    status: 'success',
    token,
    data: rows[0]
  });
}catch(err){
  res.status(500).json({
    status:'fail',
    message:err.message
  })
  fs.unlink(filePath)
console.error(err)
}
}