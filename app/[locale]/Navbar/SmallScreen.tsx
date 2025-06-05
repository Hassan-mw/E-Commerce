
import Sidebar from './NavbarComponnts/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { Jost } from 'next/font/google'
import BottomRight from './NavbarComponnts/BottomRight'
import HandleSelect from './NavbarComponnts/HandleSelect'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const SmallScreen = () => {
    

  return (
    <div className='w-full lg:hidden '>
    <div className='w-full  flex flex-col space-y-5 items-center justify-center px-5 sm:px-7  '>

    {/* Top_Date */}
    <div className='w-full flex items-center justify-between '>
    <Sidebar/>
    <Link href="/" className='flex items-center justify-center gap-x-3'><Image height={45} width={45} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></Link>
    <div><BottomRight/></div>
    </div>

    {/* Bottom_Date */}
    <HandleSelect/>
    
    </div>
    </div>
  )
}

export default SmallScreen