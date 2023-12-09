"use client"
import { cn } from '../../../lib/twMerge';
import React, { useContext } from 'react'
interface Props{
    children:React.ReactNode
    className?:string
}
export default function H1({children,className}:Props) {
  return (
    <h1 className={cn(`text-blue-500 font-bold text-2xl `,className)}>
      {children}
    </h1>
  )
}