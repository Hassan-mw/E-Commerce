


// import Right from './Right'
// import TopLeft from './TopLeft'
// import LeftBottom from './LeftBottom'

  

// const BelowData = () => {
//   return (
//     <div className='w-full max-w-[1240px]  flex items-center justify-center px-3 '>


  
//   <div className='w-full flex items-center justify-center  space-x-2'>
//   <div className='w-full flex flex-col space-y-4 items-center justify-center  '>
//      <div className='flex items-center justify-center'><TopLeft/></div>

//      <LeftBottom/>

//     </div>


//    <Right/>


     
//     </div>
//     </div>
//   )
// }

// export default BelowData



import Right from './Right'
import LeftTop from './LeftTop'
import LeftBottom from './LeftBottom'

  

const BelowData = () => {
  return (
    <div className='w-full max-w-[1240px]  flex items-center justify-center lg:px-8 '>


  
  <div className='w-full flex items-start justify-start bg-red-400  lg:space-x-12'>
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