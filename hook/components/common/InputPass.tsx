import { cn } from '../../../lib/twMerge';
import React from 'react'
interface Props{
    className?:string
    placeholder?:string
}
export default function InputPass({placeholder,className}:Props) {
  return (
    <input type="password" className={cn(` rounded-md px-2.5 py-2
      w-full text-sm text-gray-600     
         focus:outline-none  `,className)} placeholder={placeholder} />
  )
}