export const deleteCurrentCart=async({deletingId}:{deletingId:number})=>{
   

     try{
      const response=await fetch(`http://localhost:5000/api/carts/${deletingId}`)

      }catch(err){
      console.log(err,'🔥🔥🔥🔥🔥🔥')

     }
}