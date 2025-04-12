const pool=require('../Pool/pool');
const path=require('path');
const multer=require('multer');
const  AppError=require('./../ErrorHandler/appError') 
const express=require('express')
const app=express()
const fs=require('fs').promises
app.use(express.urlencoded({ extended: true }));



const uploadPath=path.join(__dirname,"../../../public")


const multerStorage = multer.memoryStorage();

const multerFilter=(req,file,cb)=>{
  if(file.mimetype.startsWith('image')){
    cb(null,true)
  }
  else{
    cb(new AppError("Not an iage ! please upload an image"),false)
  }
}

const upload=multer({
  storage:multerStorage,
  fileFilter:multerFilter
})

exports.uploadProductPicture=upload.single('image_url')

exports.getAllProducts = async (req,res,next) => {
    try {
     const {rows}=await pool.query("SELECT * FROM products")
      res.status(200).json({
        length:rows.length,
        status: 'success',
        data: rows, // you can put your products array here
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: 'error',
        message: "Can't create a product ",
      });
    }
  };

  exports.createproduct = async (req, res, next) => {
    let filename = null;
    let filePath = null;
    try {

      const requiredFields = ['name', 'price', 'rating', 'color', 'size', 'brand'];
      const missingFields = requiredFields.filter(field => !req.body[field]);
      
      if (missingFields.length > 0) {
        return next(new AppError(`Missing required fields: ${missingFields.join(', ')}`, 400));
      }
  
      // 5. Check if file exists
      if (!req.file) {
        return next(new AppError('Please upload a product image', 400));
      }
  
      // 6. Only NOW process the file (since validation passed)
      const ext = req.file.mimetype.split('/')[1];     //jpeg or png
       filename = `product_${Date.now()}.${ext}`;   
       filePath = path.join(__dirname, '../../../public', `product_${Date.now()}.${ext}`); //C:\Users\A.M.W\Desktop\e-commers\e-commers\public\product_1744267348373.jpeg 

      // 7. Write file to disk manually
      await fs.writeFile(filePath, req.file.buffer);
  
      // 8. Proceed with database insertion
      const query = `
        INSERT INTO products (
          name, description, price, image_url, rating, rating_count, brand, 
          category, stock, size, color, weight, dimensions, created_at, updated_at, is_active,url
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16,$17) 
        RETURNING *;
      `;
  
      const result = await pool.query(query, [
        req.body.name,//1
        req.body.description || null,
        req.body.price,
        filename, 
        req.body.rating,//5
        req.body.rating_count || 0,
        req.body.brand,
        req.body.category || null,
        req.body.stock || 0,
        req.body.size,//10
        req.body.color,
        req.body.weight || null,
        req.body.dimensions || null,
        new Date(),
        new Date(),//15
        true,
        req.body.url//17
      ]);
  
      res.status(201).json({
        status: 'success',
        data: result.rows[0]
      });
  
    } catch (err) {
      // 9. Clean up file if any
      // thing fails after it was written
      if (filename && filePath) {
        try {
          await fs.unlink(filePath);
        } catch (cleanupErr) {
          console.error('Error cleaning up file:', cleanupErr.message);
        }
      }
      next(err);
    }
  };
 
exports.getProductByName=async(req,res,next)=>{
  try{
    const {name}=req.params
   console.log(name,'☜(ﾟヮﾟ☜)☜(ﾟヮﾟ☜)😫😣😴😮🤗')
  const {rows} =await pool.query(`SELECT * FROM products WHERE name=$1`,[name])
  console.log(rows,'😈👿👾🧐👽👻👿')
  res.status(200)
  .json({
    status:'success',
    data:rows
  })

  }catch(err){
  res.status(500)
  .json({
    status:"fial",
    message:err.message
  })

  }
}


exports.deleteProduct=async(req,res,next)=>{

try{
  const {name}=req.params
  const {rows}=await pool.query("DELETE FROM products WHERE name=$1 RETURNING *",[name])

 res.status(200).json({
  status:"success",
  message:"Product was deleted ",
  data:rows
 })

}catch(err){
  res.status(500).json({
    status:'fail',
    message:err.message
  })
}
}
