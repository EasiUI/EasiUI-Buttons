import { cn } from '../../../lib/twMerge';
import React from 'react'
interface Props{
    
    className?:string
    mainHeading?:string
    img:string
    subHeading:string
    text:string
}
export default function DrawerCard({mainHeading,className,img,subHeading,text}:Props) {
  return (
    <div className={cn(`flex flex-col items-center p-1 border hover:shadow-lg bg-white rounded-lg`,className)}>
       {mainHeading? <h1 className='uppercase text-sm font-semibold px-3 py-2'>{mainHeading}</h1>:<></>} 
        <div className='grid grid-cols-4'>
            <div className='p-2   flex items-center justify-center'>
                <img src={img} alt="Picture" className='h-14 w-14 object-contain hover:scale-125 transition-all duration-200 ease-in-out' />
            </div>
            <div className='col-span-3 flex flex-col items-start px-3'>
                <h1 className='text-sm font-semibold p-1'>{subHeading}</h1>
                <h1 className='text-xs text-gray-500 p-1'>{text}</h1>

            </div>
        </div>
    </div>
  )
}