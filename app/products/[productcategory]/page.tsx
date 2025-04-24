import React from 'react'

const page = async({searchParams}:{searchParams:{productcategory:string}}) => {
  const {productcategory}=await searchParams
  console.log(productcategory,'🛥🛥🚤🚤🚨🚨⛽⛽🏴🏴')
  return (
    <div className='w-full flex items-center justify-center '>
d
    </div>
  )
}

export default page