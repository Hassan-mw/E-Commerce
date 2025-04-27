export const getAllProduct=async({parameters}:{parameters:URLSearchParams})=>{

    try{
      const parametersData=new URLSearchParams(parameters).toString();
      console.log(parameters,parametersData)
 const response=await fetch(`http://localhost:5000/api/products?${parametersData}`)

 const data=await response.json()
 return data.data
 console.log(data,'ᓚᘏᗢ☜(ﾟヮﾟ☜)')
    }catch(err){
  console.log(err,'🔥🔥🔥🔥🔥🔥')
    }
}
