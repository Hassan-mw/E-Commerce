
import BottomLeft from "./BottomLeft"
import BottomMiddle from "./BottomMiddle"
import BottomRight from "./BottomRight"


const Bottom = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#262626] '>

    <div className='w-full max-w-screen-2xl flex items-center justify-center py-4 px-10'>
   <BottomLeft/>
   <BottomMiddle/>
   <BottomRight/>
    </div>
    </div>
  )
}

export default Bottom