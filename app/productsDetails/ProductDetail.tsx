import { Jost } from 'next/font/google'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
const ProductDetail = ({details,shortdetail,prodcutdetails}) => {
  return (
    <div className='w-full grid grid-cols-2 gap-8'>
    <div className={`${jost.className} flex flex-col items-start justify-start`}>
    {shortdetail}
    </div>
    </div>
  )
}

export default ProductDetail