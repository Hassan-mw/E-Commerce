export const getAllFromShippingById=async()=>{
    try{
      const response=await fetch(`http://localhost:5000/api/shipping/1`)
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}

