 export const getAllFavourites=async()=>{
    try{
      const response=await fetch(`http://localhost:5000/api/favourites`)
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}


 export const getFavouritesById=async({id}:{id:URLSearchParams})=>{
    try{
      const response=await fetch(`http://localhost:5000/api/favourites/${id}`)
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}


 export const deleteFavouriteitemById=async({id}:{id:number})=>{
    try{
      console.log(id)
      const response=await fetch(`http://localhost:5000/api/favourites/${id}`,{method:'delete'})
      const data=await response.json()
      return data.data

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}