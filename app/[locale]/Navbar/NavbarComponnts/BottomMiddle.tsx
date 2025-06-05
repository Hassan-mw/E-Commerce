import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const BottomMiddle = () => {
  return (
  <div className='w-full hidden 2xl:block'>
    <Link href="/productsDetails/25" className='hover:cursor-pointer w-full border-l flex items-center justify-center gap-x-3'>
     <Image height={35} width={35} src="/middle_navbae_image.png" alt='brand'/>
     <div className={` text-white flex flex-col items-start justify-start`}>
     <div style={{fontWeight:200}} className={`${jost.className} text-sm`}>Matchable Family Othandor</div>
     <div style={{fontWeight:200}} className={`${jost.className} text-xs`}>Find the best othandor cloths.</div>
     </div>
    </Link>

  </div>
  )
}

export default BottomMiddle