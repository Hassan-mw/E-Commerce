

export const getAllCarts=async()=>{
    
    try{
      const response=await fetch(`http://localhost:5000/api/carts`)
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}
