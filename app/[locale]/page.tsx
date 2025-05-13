import React from 'react'
import Hero from './HomePageComponents/Hero'
import FlasDeals from './HomePageComponents/FlashDeals/FlasDeals'
import TrendingProduct from './HomePageComponents/TrendingProduct/TrendingProduct'
import TopNumberProduct from './HomePageComponents/TopNumbersProduct/TopNumberProduct'
import AboutCategory from './HomePageComponents/AboutCategory/AboutCategory'
import HoverData from './HomePageComponents/HoverData/HoverData'
import { useTranslations } from 'next-intl'


const page = () => {

  return (
    <div className='w-full h-full flex flex-col '>
    {/* <HoverData/> */}
    <Hero/>
    <FlasDeals/>
    <TrendingProduct/>
    <TopNumberProduct/>
    <AboutCategory/>
  
    </div>
  )
}

export default page
// import {useTranslations} from 'next-intl';
// import Link from 'next/link';
// // import {Link} from '@/i18n/navigation';
 
// export default function HomePage() {
//   const t = useTranslations('HomePage');
//   return (
//     <div>
//       <h1>{t('title')}</h1>
//       <Link href="/about">{t('about')}</Link>
//     </div>
//   );
// }