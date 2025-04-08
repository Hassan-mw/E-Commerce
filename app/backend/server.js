require('dotenv').config();
const express=require('express');
const app=express()
const Pool=require('./Pool/pool')
app.use(express.json());
const controller=require('')
app.use('/api/',(req,res,next)=>{
    console.log('🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯🐯')
    res.send('all Ok')
})

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








app.listen(process.env.PORT ,()=>{
console.log(`server was runing on port ${process.env.PORT}`)
})

