
import React from 'react'
import AboutCategoryData from './AboutCategoryData'
import ScrollProductShow from './ScrollProductShow'


const AboutCategory = () => {
  const data1=[
    {id:1,title:'Warm & Bold Looks',belowTitle:'Throwback shirts & all-day dresses in vibrant red shades.',image:'red_dress.png',style:'bg-[#BF2E3B]',color:"red"},
    {id:2,title:'Fresh & Sporty Styles',belowTitle:'Get glowing in refreshing green pieces for every mood.',style:'bg-[#4caa3b]',color:"blue",image:'green_dress_homepage.jpg'}
  ]
  const data2=[
    {id:1,title:'Playful & Stylish Picks',belowTitle:'Let’s dress up in pink and shine all day.',image:'pink_dress.png',color:"pink",style:'bg-[#D11FB5]'},
    {id:2,title:'Cool & Casual Comfort',belowTitle:'Poolside glam and chill looks in beautiful blue hues.',image:'blue_dress.png',color:"blue",style:'bg-[#0186C4]'}
  ]
  return (
    <div className='hidden lg:block'>
    <div className='w-full flex items-center justify-center bg-white py-9'>
    <div className='w-full max-w-screen-xl px-10 flex flex-col items-center justify-center space-y-8'>
    
      <AboutCategoryData data={data1} /> 
      <ScrollProductShow/>
      <AboutCategoryData data={data2} /> 
      {/* <AboutCategoryData/>  */}
    </div>
    </div>
    </div>
  )
}

export default AboutCategory