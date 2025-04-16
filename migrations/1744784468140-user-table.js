'use strict'

module.exports.up = (pgm)=>{
 pgm.sql(`
  CREATE TABLE users(
  
  id SERIAL PRIMARY KEY,
  name varchar(100),
  phone integer,
  email Varchar(100)
  
  
  
  )
  `) 
}

module.exports.down = function (next) {
  next()
}
