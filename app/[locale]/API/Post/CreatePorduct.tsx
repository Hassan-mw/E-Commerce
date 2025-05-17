export const createProduct=async({id}:{id:URLSearchParams})=>{
try{
    console.log(id,'from created ared')
    axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
const data=await fetch(`http://localhost:5000/api/carts`,{
    method:'POST',
    body:JSON.stringify({
     product_id:id   
    })
})
}catch{

}
}