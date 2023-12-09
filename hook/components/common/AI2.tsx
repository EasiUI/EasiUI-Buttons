import { ChevronDown, LucideIcon } from 'lucide-react'
import { cn } from '../../../lib/twMerge'
interface Props {
  children: React.ReactNode
  className?: string
  menu:string[]
}
export default function AI2({ children, className,menu }: Props) {
  return (
    <details className='group relative w-full ' >
      <summary className={cn(`h-8 px-3 py-2 w-full flex items-center justify-start gap-3 hover:bg-blue-100 cursor-pointer text-blue-400 hover:text-blue-700 transition-all duration-300`, className)} >
           <ChevronDown className='group-open:rotate-180 absolute top-2 right-3 text-gray-500'/>
            {children}
      </summary>
      {menu && menu.map((item)=>
      <div key={item} className={cn(`h-8 pl-10 py-2 w-full flex items-center justify-start gap-3 hover:bg-gray-100 cursor-pointer text-gray-500 hover:text-gray-700`)}><a href='#'>{item}</a></div>
      )}
    </details>
  )
}