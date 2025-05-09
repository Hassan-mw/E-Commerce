import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const TextData = () => {
 
  const data=[
    {id:1,title:'The Essence of Time Travel',data:'Vintage fashion allows us to transcend eras, stepping into the shoes of those who came before us. Each piece tells a story, offering a glimpse into the cultural and societal norms of its time. From the flapper dresses of the 1920s that embodied the spirit of rebellion to the tailored suits of the 1960s that epitomized sophistication, every era has its signature style waiting to be revived.'},
    {id:2,title:'Quality Beyond Compare',data:'One of the hallmarks of vintage fashion is the unparalleled craftsmanship that went into creating garments that stood the test of time. In a world where fast fashion often prioritizes quantity over quality, vintage pieces remind us of an era when attention to detail and durability were paramount. The feel of a vintage silk dress or the weight of a hand-sewn coat is a testament to the dedication of artisans of yesteryears.'},
    {id:3,title:'Eclectic Personal Style',data:'Embracing vintage fashion allows us to curate a wardrobe thats uniquely ours. Mixing and matching vintage pieces with contemporary items creates a personal style that defies categorization. From pairing a 1970s bohemian blouse with modern jeans to accessorizing a little black dress with vintage brooches, the possibilities are endless and the results are often strikingly original.Sustainable Chic'},
    {id:4,title:'Sustainable Chic',data:'As the world embraces sustainability, vintage fashion takes center stage as a prime example of eco-conscious style. Choosing pre-loved clothing not only reduces the demand for new production but also breathes new life into garments that might otherwise be forgotten. Its a nod to slow fashion, a movement that encourages thoughtful consumption and reduces the impact on the environment.'},
  ]

  return (
    <div className='w-full flex  items-center justify-center '> 
    <div className='w-full max-w-[1100px]  flex flex-col space-y-8 '>
      {/* text-data */}
    <div className='w-full  flex flex-col   space-y-4 '>
     <div className={`${jost.className}  text-2xl text-[#262626] `}>"Unveiling Timeless Elegance: Exploring the Allure of Vintage Fashion"</div>
  
    {data.map((data,index)=>
      <div key={data.id} className='flex flex-col items-start justify-start space-y-1 '>
      <div className={`${jost.className} text-sm text-[#262626]`}>{data.title}</div>
      <div style={{fontWeight:300}} className={`${jost.className} text-xs text-[#707377]`}>{data.data}</div>
      </div>
     ) }
    </div>
    {/* images */}
   
    </div>
    </div>
  )
}

export default TextData