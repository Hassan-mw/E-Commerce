// require('dotenv').config();
const express=require('express');
const app=express()
const Pool=require('./Pool/pool')
// app.use(express.json());
const productRoutes=require('./Router/productRoutes')
const  AppError=require('./ErrorHandler/appError') 




app.use('/api/products',productRoutes);

  
Pool.connect({
    host:"localhost",
    port:5432,
    database:'E-commers',
    user:'postgres',
    password:'hassan'
}).then(()=>{
    console.log('Connected to Database 🥳🥳🥳🥳🥳')
}).catch((err)=>{
    console.log(err,"Can't connected to database 💥💥💥")
})



// ! GLobal Error Middleware
app.all('*',(req, res, next)=>{
    next(new AppError("Can't find this page", 404));
  });
  
  
app.use((err,req,res,next)=>{

    res.status(500).send("some thing was broken!")
})


app.listen(process.env.PORT || 5000 ,()=>{
console.log(`server was runing on port ${process.env.PORT}`)
})

