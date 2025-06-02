
import LargeScreenAuthentication from "./LargeScreenAuthentication"
import SmallScreenAuthentication from "./SmallScreenAuthentication"

const login = () => {
  return (
    <div className='Data_Center w-full p-5 py-16'>
    <div className='Data_Center w-full max-w-screen-lg'>
   
     <div className="lg:hidden w-full "><SmallScreenAuthentication/> </div>
     <div className="hidden lg:block w-full "><LargeScreenAuthentication/> </div>

    </div>
    </div>
  )
}

export default login