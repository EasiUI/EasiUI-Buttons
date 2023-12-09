import React from 'react'
import { cn } from '../../../lib/twMerge'
interface Props{
    children:React.ReactNode
    className?:string
}
export default function DivJE({children,className}:Props) {
  return (
    <div className={cn(`flex items-center justify-end p-2 gap-2 rounded-sm `,className)}>
      {children}
    </div>
  )
}
