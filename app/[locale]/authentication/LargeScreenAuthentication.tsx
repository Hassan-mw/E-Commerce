import React from 'react'
import Login from './Login'
import Signup from './Signup'

const LargeScreenAuthentication = () => {
  return (
    <div className='w-full flex items-start justify-center  gap-x-14'>
     <Login/>
     <Signup/>
    </div>
  )
}

export default LargeScreenAuthentication