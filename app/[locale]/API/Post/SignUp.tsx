

export const signupRequest=async()=>{
    
    try{
      const response=await fetch(`http://localhost:5000/api/signup`)
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}
