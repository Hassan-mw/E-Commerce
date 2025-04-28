'use client'
import { ButtonDataTYpe } from '@/app/Types/dataType'
import { Jost } from 'next/font/google'
import Link from 'next/link'
import React from 'react'


const jost=Jost({
  weight:['300'],
  subsets:['latin']
})

const Button = ({style,children,href}:ButtonDataTYpe) => {
  return (
    <Link href={href} className={`${jost.className}  ${style}`}>
        {children}
    </Link>
  )
}

export default Button