import { cn } from '../../../lib/twMerge';
import React from 'react'
interface Props{
    children:React.ReactNode
    className?:string
}
export default function DivJB({children,className}:Props) {
  return (
    <div className={cn(`flex items-center justify-between p-2 gap-2 rounded-sm `,className)}>
      {children}
    </div>
  )
}
