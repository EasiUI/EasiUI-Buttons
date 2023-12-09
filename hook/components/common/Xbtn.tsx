import { cn } from '@/lib/twMerge'
import { X } from 'lucide-react'
import React from 'react'
interface Props{
    handleClose:() => void
    className?:string 
    size?:number
}
export default function Xbtn({handleClose,className,size}:Props) {
  return (
    <div>
      <button className={cn(`cursor-pointer h-8 w-8  rounded-full bg-gray-200  text-gray-500 
      hover:opacity-80 hover:scale-90 flex items-center justify-center`,className)} 
     onClick={handleClose} ><X size={size}/></button>
    </div>
  )
}
