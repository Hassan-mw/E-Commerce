
export const getAddressById=async()=>{
    try{
      const response=await fetch('http://localhost:5000/api/address')
     const data=await response.json()
     console.log(data)
      return data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')
      }
}