export const getAllSimilarProducts=async({id}:{id:URLSearchParams})=>{
   try{ 
    
    const response=await fetch(`http:localhost:5000/api/similarProductRoutes/${id}`)
    const data=await response.json()
    return data.data

   }catch(err){


    }


}