export const getAllProduct=async()=>{
    try{
 const response=await fetch(`http://localhost:5000/api/products`)

 const data=await response.json()
 return data.data
 console.log(data,'ᓚᘏᗢ☜(ﾟヮﾟ☜)')
    }catch(err){
  console.log(err,'🔥🔥🔥🔥🔥🔥')
    }
}
