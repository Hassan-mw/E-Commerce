
import React from 'react'
import AboutCategoryData from './AboutCategoryData'
import ScrollProductShow from './ScrollProductShow'


const AboutCategory = () => {
  const data1=[
    {id:1,title:'Never-Ending Summer',belowTitle:'Throwback Shirts & all-day dressed',image:'red_dress.png',style:'bg-[#BF2E3B]',color:"red"},
    {id:2,title:'Famous sport brandsNever-Ending Summer',belowTitle:'Get in gym essentialsThrowback Shirts & all-day dressed',style:'bg-[#4caa3b]',color:"blue",image:'green_dress_homepage.jpg'}
  ]
  const data2=[
    {id:1,title:'The Pinky Barbie',belowTitle:'Lets play  dressed up & glow',image:'pink_dress.png',color:"pink",style:'bg-[#D11FB5]'},
    {id:2,title:'Best Seller Dress',belowTitle:'poolside glam include and beautyfull',image:'blue_dress.png',color:"blue",style:'bg-[#0186C4]'}
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