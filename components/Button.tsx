'use client'
import { ButtonDataTYpe } from '@/app/Types/dataType'
import Link from 'next/link'
import React from 'react'

const Button = ({style,children,href}:ButtonDataTYpe) => {
  return (
    <Link href={href} className={style}>
        {children}
    </Link>
  )
}

export default Button