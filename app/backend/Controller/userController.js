

// const jwt=require('jsonwebtoken')
const multer = require('multer')
const pool = require('../Pool/pool');
const AppError = require('../ErrorHandler/appError');




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

exports.uploadUserPicture=upload.single('user_image')



exports.signUp=async (req,res,next) => {
try{
   
// const {name,email,phone}=req.body
// const {photo}=req.file;
console.log(req.file)
// const {rows}=await pool.query(`INSERT INTO users (name,phone,email,photo) VALUES ($1,$2,$3) RETURNING *`,
//   [req.body.name,req.body.phone,req.body.email,req.file.photo])
// console.log(rows,)

// const token=jwt.sign({id:rows.id},process.env.JWT_SECRET,{expiresIn:90})
res.status(201).json({
    status: 'success',
    // data: result.rows[0]
  });
}catch(err){
console.error(err)
}
}