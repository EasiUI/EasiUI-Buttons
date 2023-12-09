import { cn } from '../../../lib/twMerge';
import React from 'react'

export default function Line({className,theme}:{className:string,theme:string}) {
  
  return (
    <div className={cn(`absolute  h-[1px]    bg-gradient-to-r from-transparent via-${theme}-400 to-transparent from-20% via-60% to-100%`,className)}/>
      
    
  )
}
