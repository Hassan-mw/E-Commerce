import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link';
import { getAllSimilarProducts } from '../API/FetchingAllSimilarProducts';


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const ProductRowBottom = async({id}:{id:URLSearchParams}) => {
 const datas=await getAllSimilarProducts({id})


    const price=55;
    const data=[
        {id:1,image:"product_1745605506649.jpg",name:"SHORT PRINTED DRESS",product_id:10,price:55 },
        {id:2,image:"product_1745606831633.jpg",name:"SHORT PRINTED DRESS",product_id:17,price:55 },
        {id:3,image:"product_1745606572852.jpg",name:"SHORT PRINTED DRESS",product_id:9,price:55 },
        {id:4,image:"product_1745657137870.jpg",name:"SHORT PRINTED DRESS",product_id:7,price:55 },
    ]
  return (
    <div className='w-full flex flex-col space-y-5 px-5 py-10 '>
    <div className={`${jost.className} text-xl`}>You might also like</div>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lag:gap-8'>
    {/* 1 */}
    {
        data.map((data,index)=>
    <Link href={`/productsDetails/${data.product_id}`} key={data.id} className='border rounded-sm border-slate-200  w-[85%] sm:w-full flex sm:flex-col items-center justify-start py-3'>
    <Image height={300} width={300} className='h-full max-h-[180px] lg:max-h-[300px] p-3 object-contain rounded-sm ' src={`/${data.image}`} alt='product' />
    <div className='w-full h-full px-6  flex flex-col items-start justify-center space-y-3'>
        {/* Name */}
    <div className={`${jost.className} text-xl`}>{data.name}</div>
    <div className={ ` w-full flex items-center justify-between gap-x-3 md:w-[65%] lg:w-full`}>
        <span  style={{fontWeight:500}}  className='text-xs text-red-600'>${data.price}.99</span>
        <span  style={{fontWeight:400}} className='text-[#555555] text-[12px]'>${data.price*2+9}.99</span>
        <span className=' rounded-xs text-red-500 text-[11px] '>-40%</span>
    
    
    </div>
     {/* Button */}
     <div className='border text-sm border-[#555555] hover:shadow-xl hover:cursor-pointer duration-500  text-[#555555] gap-x-3  py-2 rounded-md  w-full flex items-center justify-center '>
      <span className={`${jost.className}  text-[#262626]`}>$28</span>
       <span  className={`${jost.className}  text-[#262626] `}>ADD TO BASKET</span>
     </div>
    </div>
    </Link>
    )}
    
   
 
   
    </div>
    </div>
  )
}

export default ProductRowBottom