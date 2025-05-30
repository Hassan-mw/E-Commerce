import React from 'react'

import { Jost } from 'next/font/google'
import Button from '@/components/Button'
import { useTranslations } from 'next-intl'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const HeroPageData = () => {
  const t = useTranslations('HomePage');

  return (
    <div className={`${jost.className} w-full sm:w-[500px] md:w-full flex flex-col space-y-3 pl-7 lg:space-y-2 `}>
      <div  className={`${jost.className} text-5xl lg:text-8xl font-bold text-[#353433]`}>Limunea</div>
      <div  className={`${jost.className} text-xl lg:text-4xl font-semibold text-[#353434]`}>{t('subTitle')}</div>
      <div  className={` text-sm lg:text-md text-[#66666b] lg:pb-14`}> {t('subDetail')}</div>
       <Button href="/products/All" style="px-4 py-1 text-md bg-[#dfb9a1] w-28 flex items-cener justify-center text-black rounded-md  ">{t('button')}</Button>
    </div>
  )
 //[#b6886c]
}

export default HeroPageData