import { cn } from '../../../lib/twMerge';
import React from 'react'
interface Props{
    children:React.ReactNode
    className?:string
}
export default function DivC({children,className}:Props) {
  return (
    <div className={cn(`flex flex-col items-center  p-2 gap-2  `,className)}>
      {children}
    </div>
  )
}
