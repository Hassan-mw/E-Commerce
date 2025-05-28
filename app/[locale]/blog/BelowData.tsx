
import Right from './Right'
import LeftTop from './LeftTop'
import LeftBottom from './LeftBottom'

  

const BelowData = () => {
  return (
    <div className='w-full max-w-[1100px]  Data_Center lg:px-8 '>


  
  <div className='w-full flex items-start justify-start   lg:space-x-12'>
  <div className='w-full flex flex-col space-y-4 items-center justify-between  '>
     <LeftTop/>
     <LeftBottom/>

    </div>


    <Right/>


     
    </div>
    </div>
  )
}

export default BelowData