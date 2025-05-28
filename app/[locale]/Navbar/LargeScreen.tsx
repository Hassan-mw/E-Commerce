import Bottom from "./NavbarComponnts/Bottom"
import Top from "./NavbarComponnts/Top"


const LargeScreen = () => {
  return (
     <div className='hidden lg:block w-full '>
     {/*//! Top  */}
     <Top/>
     {/*//! Bottom  */}
     <Bottom/>
    </div>
  )
}

export default LargeScreen