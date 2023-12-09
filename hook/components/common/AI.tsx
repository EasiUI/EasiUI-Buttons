import React, { useContext } from 'react'
import { cn } from '../../../lib/twMerge'
interface Props {
  children: React.ReactNode
  className?: string
}
export default function AI({ children, className }: Props) {
  return (
    <div role='button' className={cn(`h-8 px-3 py-0 w-full flex items-center justify-start gap-3 text-sm hover:bg-blue-100 cursor-pointer
    dark:text-white dark:hover:bg-blue-500 text-blue-800 hover:text-blue-500`, className)}>
      
      {children}
    </div>
  )
}
