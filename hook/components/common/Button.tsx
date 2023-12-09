import { cn } from '../../../lib/twMerge';
import React from 'react'
interface Props extends React.HTMLAttributes<HTMLButtonElement>{
    children:React.ReactNode
    className?:string
}
export default function Button({children,className}:Props) {
  return (
    <button className={cn(`bg-slate-700 rounded-sm  h-10  w-full text-sm text-white 
      border  border-gray-300 font-bold  focus:outline-none flex items-center justify-center space-x-3
      hover:scale-95 transition duration-500 `,className)}>
      {children}
    </button>
  )
}