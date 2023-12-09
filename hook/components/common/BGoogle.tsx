import { cn } from '../../../lib/twMerge';
import { ArrowBigRight, ArrowRight, LucideIcon } from 'lucide-react'
import React from 'react'
interface Props{
    children:React.ReactNode
    className?:string
    arrowicon:boolean
}
export default function BGoogle({children,className,arrowicon}:Props) {
  return (
    <a href="#" className={cn(`group rounded-sm  h-10  w-full text-sm  
      border  border-gray-300 dark:border-gray-500 font-bold  focus:outline-none flex items-center justify-center space-x-3
      hover:scale-95 transition duration-500 `,className)}>
        <img src="/google.png" alt="google logo" className='h-6 w-6 object-contain' />
     <p className='flex flex-1 justify-between space-x-5'>{children} with Google { arrowicon?<span className='opacity-0 group-hover:opacity-100 text-gray-500'><ArrowRight size={20}/></span>:<></>}</p> 
      
       </a>
  )
}