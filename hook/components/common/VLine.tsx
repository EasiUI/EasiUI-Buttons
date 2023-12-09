import React from 'react'
import { cn } from '../../../lib/twMerge'

export default function VLine({className}:{className:string}) {
  return (
    <div className={cn(`absolute  w-[1px]    bg-gradient-to-t from-transparent via-lime-500 to-zinc-900 from-10% via-40% to-100%`,className)}/>
      
    
  )
}