// require('dotenv').config();
const express=require('express');
const app=express()
const Pool=require('./Pool/pool')
const productRoutes=require('./Router/productRoutes')
const usersRoutes=require('./Router/usersRoutes')
const reviewRoutes=require('./Router/reviewRoutes')
const favouriteRoutes=require('./Router/favouriteRoutes')
const orderRoutes=require('./Router/orderRoutes')
const  AppError=require('./ErrorHandler/appError') 
app.use(express.json());





app.use('/api/products',productRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/reviews',reviewRoutes);
app.use('/api/favourites',favouriteRoutes);
app.use('/api/carts',cartRoutes);
app.use('/api/order',orderRoutes);

  


  
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





app.listen(process.env.PORT || 5000 ,()=>{
console.log(`server was runing on port ${process.env.PORT}`)
})

// ! GLobal Error Middleware
// Global error handler for undefined routes (Page Not Found)
app.use((req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`
  });
});


app.use((err,req,res,next)=>{

  res.status(500).send("some thing was broken!")
})