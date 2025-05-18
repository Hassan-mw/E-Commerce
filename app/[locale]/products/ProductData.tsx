
import { TopNumberProduct, TopNumberProductDataType } from '../Types/dataType'
import ProductArrray from './ProductArrray'


const ProductData = ({data}:TopNumberProductDataType) => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white py-6'>            
     <ProductArrray  data={data}  />
    </div>
  )
}

export default ProductData