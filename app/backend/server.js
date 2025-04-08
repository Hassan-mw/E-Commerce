// require('dotenv').config();
const express=require('express');
const app=express()
const Pool=require('./Pool/pool')
// app.use(express.json());
const productRoutes=require('./Router/productRoutes')

app.get('/test', (req, res) => {
    res.send('✅ Test route working!');
  });
  

console.log('🤓🤓🤓🤓🤓🤓🤓🤓')
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






app.listen(process.env.PORT || 5000 ,()=>{
console.log(`server was runing on port ${process.env.PORT}`)
})

