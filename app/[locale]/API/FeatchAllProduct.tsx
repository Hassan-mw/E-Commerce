

export const getAllProduct=async({parameters}:{parameters:URLSearchParams})=>{
    
    try{
      const parametersData=new URLSearchParams(parameters).toString();

      const response=await fetch(`http://localhost:5000/api/products?${parametersData}`)
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}


export const getProductById=async({id}:{id:URLSearchParams})=>{

  try{
   const response=await fetch(`http://localhost:5000/api/products/${id}`)
   const data=await response.json()
   return data.data
   }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

   }
}