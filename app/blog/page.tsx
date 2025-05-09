import React from 'react'
import Context from './Context'
import Images from './Images'
import BelowData from './BelowData'
import TextData from './TextData'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const page = () => {
  return (
    <div className='w-full flex  items-center justify-center  '>
    <div className='w-full max-w-screen-xl flex flex-col items-center justify-center  '>
     <div className='relative'>
       <Images/>
      <div className='absolute top-20 left-7 sm:left-10 md:left-8 lg:left-15'> <Context/></div> 
      </div>
      <BelowData/>
      <TextData/>
      {/* <BelowData/> */}
      <ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>

    </div>
    </div>
  )
}

export default page