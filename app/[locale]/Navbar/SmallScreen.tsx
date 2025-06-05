
import Sidebar from './NavbarComponnts/Sidebar'
import Image from 'next/image'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import { TfiPackage } from 'react-icons/tfi'
import { useContext } from 'react'
import { DataContext } from '../ContextApi/ContextApi'
import { Jost } from 'next/font/google'
import TopRight from './NavbarComponnts/TopRight'
import BottomRight from './NavbarComponnts/BottomRight'
import HandleSelect from './NavbarComponnts/HandleSelect'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const SmallScreen = () => {
      const {brand,setBrand}=useContext(DataContext)

  return (
    <div className='w-full lg:hidden '>
    <div className='w-full  flex flex-col space-y-5 items-center justify-center px-5 sm:px-7  '>

    {/* Top_Date */}
    <div className='w-full flex items-center justify-between bg-green-500'>
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