 export const getAllOrdes=async()=>{
    try{
      const response=await fetch(`http://localhost:5000/api/orders`)
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}
//  export const getActiveOrdersData=async()=>{
//     try{
//       const response=await fetch(`http://localhost:5000/api/orders`)
//       const data=await response.json()
//       return data.data

//       }catch(err){
//       console.log(err,'🔥🔥🔥🔥🔥🔥')

//      }
// }