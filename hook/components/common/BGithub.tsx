import { cn } from '../../../lib/twMerge';
import {  ArrowRight, Facebook, Github } from 'lucide-react'
import React from 'react'
interface Props{
    children:React.ReactNode
    className?:string
    arrowicon:boolean
}
export default function BGithub({children,className,arrowicon}:Props) {
  return (
    <a href="#" className={cn(`group rounded-sm  h-10  w-full text-sm  
      border  border-gray-300 dark:border-gray-500 font-bold  focus:outline-none flex items-center justify-center space-x-3
      hover:scale-95 transition duration-500 `,className)}>
       <div className='bg-blue-500 rounded-full flex items-center justify-center h-7 w-7'>
       <Github size={20} className=' stroke-white '/>
        </div> 
     <p className='flex flex-1 justify-between space-x-5'>{children} with Facebook { arrowicon?<span className='opacity-0 group-hover:opacity-100 text-gray-500'><ArrowRight size={20}/></span>:<></>}</p> 
      
       </a>
  )
}