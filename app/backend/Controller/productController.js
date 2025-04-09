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
// const multerStorage=multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null,uploadPath)
//   },
//   filename:(req,file,cb)=>{
//     const ext=file.mimetype.split('/')[1];
//     cb(null,`users_${Date.now()}.${ext}`)
//   }
// })

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
      // 4. VALIDATE FIRST - before any file processing
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
      const ext = req.file.mimetype.split('/')[1];
       filename = `product_${Date.now()}.${ext}`;
      console.log(filename,'🤒🤒😈😈🥳🥳🥳')
       filePath = path.join(__dirname, '../../../public', `product_${Date.now()}.${ext}`);
  
      // 7. Write file to disk manually
      await fs.writeFile(filePath, req.file.buffer);
  
      // 8. Proceed with database insertion
      const query = `
        INSERT INTO products (
          name, description, price, image_url, rating, rating_count, brand, 
          category, stock, size, color, weight, dimensions, created_at, updated_at, is_active
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) 
        RETURNING *;
      `;
  
      const result = await pool.query(query, [
        req.body.name,
        req.body.description || null,
        req.body.price,
        filename, // Store only filename (not full path)
        req.body.rating,
        req.body.rating_count || 0,
        req.body.brand,
        req.body.category || null,
        req.body.stock || 0,
        req.body.size,
        req.body.color,
        req.body.weight || null,
        req.body.dimensions || null,
        new Date(),
        new Date(),
        true
      ]);
  
      res.status(201).json({
        status: 'success',
        data: result.rows[0]
      });
  
    } catch (err) {
      // 9. Clean up file if anything fails after it was written
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
  // exports.createproduct = async (req, res, next) => {
  //   try {
  //     const {
  //       name,
  //       description,
  //       price,
  //       rating,
  //       rating_count,
  //       brand,
  //       category,
  //       stock,
  //       size,
  //       color,
  //       weight,
  //       dimensions,
  //     } = req.body;
  
  //     // Check if all required fields are provided
  //     if (!name || !rating || !price || !color || !size || !brand) {
  //       return next(new AppError('All fields must be provided', 400));
  //     }
  
  //     // Prepare data
  //     const created_at = new Date();
  //     const updated_at = new Date();
  //     const is_active = true;
  //     const image_url = req.file // Ensure the image URL is correct
  
     
   
  //     // SQL query to insert product into the database
  //     const query = `
  //       INSERT INTO products (
  //         name, description, price, image_url, rating, rating_count, brand, 
  //         category, stock, size, color, weight, dimensions, created_at, updated_at, is_active
  //       )
  //       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) 
  //       RETURNING *;
  //     `;
  
  //     // Insert product data
  //     const x = await pool.query(query, [
  //       name,
  //       description,
  //       price,
  //       image_url,
  //       rating,
  //       rating_count,
  //       brand,
  //       category,
  //       stock,
  //       size,
  //       color,
  //       weight,
  //       dimensions,
  //       created_at,
  //       updated_at,
  //       is_active,
  //     ]);
  
  //     // Log the query result for debugging

  //     if (req.file) {
  //       fs.unlink(req.file.path, (err) => {
  //         if (err) console.error('Error deleting file:', err);
  //       });
  //     }
  //     ret
  //     // Return success response with the inserted product data
  //     res.status(201).json({
  //       status: 'success',
  //       data: x.rows[0], // Send the inserted row
  //     });
  //   } catch (err) {
  //     // Log the error to the console
  //     console.error('Error during database insertion:', err);
  //     if (req.file) {
  //       fs.unlink(req.file.path, (err) => {
  //         if (err) console.error('Error deleting file:', err);
  //       });
  //     }
  
  //     // Return an error response
  //     res.status(500).json({
  //       status: 'error',
  //       message: "Can't create product",
  //       error: err.message, // Send the actual error message
  //     });
  //   }
  // };
  




