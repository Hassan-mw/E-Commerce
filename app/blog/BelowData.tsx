


import Right from './Right'
import LeftTop from './LeftTop'
import LeftBottom from './LeftBottom'

  

const BelowData = () => {
  return (
    <div className='w-full max-w-[1100px]  flex items-center justify-center px-3 '>


  
  <div className='w-full flex items-center justify-center  space-x-2'>
  <div className='w-full flex flex-col space-y-4 items-center justify-center  '>
     <LeftTop/>
     <LeftBottom/>

    </div>


   <Right/>


     
    </div>
    </div>
  )
}

export default BelowData