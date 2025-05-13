const pool=require('../Pool/pool');
const path=require('path');
const multer=require('multer');
const  AppError=require('./../ErrorHandler/appError') 
const express=require('express')
const app=express()
const fs=require('fs').promises
app.use(express.urlencoded({ extended: true }));

// const app=express()




const multerStorage = multer.memoryStorage();

const multerFilter=(req,file,cb)=>{
  console.log(req.files,'‹‹®®')
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

exports.uploadProductPicture=upload.fields([
  {name:'main_image',maxCount:1},
  {name:'images',maxCount:3},
])



exports.getAllProducts = async (req,res,next) => {
    try {

      const queryData=req.query
      let query='SELECT * FROM products'
      const consditions=[];
      const values=[]
      const allowedFields=['model','style','color','size','price']


     Object.entries( queryData).forEach(([key,value],index)=>{

     if(allowedFields.includes(key)){
      values.push(value),
     consditions.push(`${key} = $${values.length}`)
    }
  
  
  
   })

    if(values.length>0){
      console.log('inside valus',consditions)
       query+= ' WHERE ' + consditions.join(' AND ')
      }

     

    if(req.query.sort){
     
    query+=  `  ORDER BY ${req.query.sort} `
    }

       
    
    const {rows}=await pool.query(query,values)





      res.status(200).json({
        length:rows.length,
        status: 'success',
        data: rows, // you can put your products array here
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };
















exports.createproduct = async (req, res, next) => {
    let filename = null;
    let filePath = null;
    let images;
    try {
        console.log(req.files,'🚪🪑🪑🌃🌁🌁⛺⛺')
      //    console.log(req.file,'🚚🛴🚲🚲🚈🚈🚅🚊🚅🚉🚉🚉🚊✈🛰',req.body)
        const requiredFields = ['name', 'price', 'rating', 'color', 'size', 'brand'];
        const missingFields = requiredFields.filter(field => !req.body[field]);
        
      //   if (missingFields.length > 0) {
      //     return next(new AppError(`Missing required fields: ${missingFields.join(', ')}`, 400));
      //   }
    
        // 5. Check if file exists
        // if (!req.files.main_image) {
        //   return next(new AppError('Please upload a product image', 400));
        // }
    
        // 6. Only NOW process the file (since validation passed)
        const ext = req.files.main_image[0].mimetype.split('/')[1];     //jpeg or png
         filename = `product_${Date.now()}.${ext}`;   
         filePath = path.join(__dirname, '../../../public', `product_${Date.now()}.${ext}`); //C:\Users\A.M.W\Desktop\e-commers\e-commers\public\product_1744267348373.jpeg 
         images=[]
  
  
        // 7. Write file to disk manually
      await fs.writeFile(filePath, req.files.main_image[0].buffer);
  
       req.files.images.forEach(async(file,i) => {
        // console.log(file,'🚟🚟🚇🚈🚅🚅🚄🚄🚄🚅🚅🚅🚅')
       const arrayFilename=`product_${Date.now()}-${i+1}.${ext}`;  
       await fs.writeFile(arrayFilename, file.buffer);
       images.push(arrayFilename) 
         });
  
  
        // 8. Proceed with database insertion
        const query = `
          INSERT INTO products (
            main_image,images,name, shortdetail, ratingnumber, price, discount, brand, model, 
            style, color, size, prodcutDetails,details,rating
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12,$13,$14,$15) 
          RETURNING *;
        `; 
    
        const result = await pool.query(query, [
          filename,
          images,
          req.body.name,//1
          req.body.shortdetail || null,
          req.body.ratingnumber,
          req.body.price, 
          req.body.discount,//5
          req.body.brand,
          req.body.model ,
          req.body.style ,
          req.body.color,
          req.body.size ,
          req.body.prodcutDetails ,
          req.body.details,
          req.body.rating 
        ]);
    
        res.status(201).json({
          status: 'success',
          data: result.rows[0]
        });
    
      } catch (err) { 
      
  
        try {
            await fs.unlink(filePath);
          images.forEach(async el=>await fs.unlink(el))  
  
          } catch (cleanupErr) {
            console.error('Error cleaning up file:', cleanupErr.message);
          }
        console.log(err)
        res.status(500).json({ 
          status:'fail',
          message:err.message,
          details:err.details,
          detail:err.detail,
        })
        // if (filename && filePath) {
        
        // }
        next(err);
      }
};
   
 
exports.getProductById=async(req,res,next)=>{
  try{
    const {id}=req.params

  const {rows} =await pool.query(`SELECT * FROM products WHERE id=$1`,[id])
  console.log(rows,id,'😈👿👾🧐👽👻👿')
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
