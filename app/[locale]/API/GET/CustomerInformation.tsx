
export const getAllCustomerInfo=async()=>{
    try{
      const response=await fetch(`http://localhost:5000/api/address/1`)
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}





