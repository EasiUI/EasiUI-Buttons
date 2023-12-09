"use client"
import { cn } from '../../../lib/twMerge';
import React, { useContext } from 'react'
interface Props{
    children:React.ReactNode
    className?:string
}
export default function H6({children,className}:Props) {
  return (
    <h6 className={cn(`text-gray-500  text-xs `,className)}>
      {children}
    </h6>
  )
}