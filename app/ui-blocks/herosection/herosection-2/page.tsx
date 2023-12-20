"use client"
import { AlignJustify,  ChevronLeft,  Globe, MapPin } from 'lucide-react'
import React, { useState } from 'react'
export const travelNavitems=["home","Countries","places","blog","contact"]
import { corosalImage1 } from '../../data/image/corosalImage1'
export default function Herosection2() {
  const [open, setOpen] = useState<boolean>(false)
  const [count, setCount] = useState<number[]>([0,1,2,3])
  
const handleNextFunc=()=>{ 
 const newArr= count.map((i)=>{
   if (i>=corosalImage1.length-1) {
    return i=0
   } else{
    return i+1
    
   }
 }
 )
 
 
 setCount(newArr)
}
const handlePreviousFunc=()=>{ 
 const newArr= count.map((i)=>{
   if (i<=0) {
    return i=corosalImage1.length-1
   } else{
    return i-1
   }
 }
 )
 setCount(newArr)
}
  function MobileNav() {
    return (
      <div className={`${open ? "flex" : "hidden"} absolute z-20 left-0 top-12 w-full h-auto bg-white/90  px-4 py-2  flex-col md:flex-row`} >
        {travelNavitems && travelNavitems.map((item) =>
          <button key={item}
            className={`uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-green-300
               hover:bg-green-300 px-2 h-full py-1 rounded transition-all duration-300`}>{item}</button>
        )}
      </div>
    )
  }

  return (
    <section style={{ backgroundImage: `url(/image/scene1.jpg)` }} 
    className={` h-screen bg-cover `}>
      {/* nav section */}
      <nav className={`w-full h-12 flex items-center justify-start`}>
        <div className={`flex items-center justify-start gap-4 px-2 md:px-5 lg:px-10`}>
          <Globe/>
          <h4>Metyssa Graffin</h4>
        </div>
        <div className={`hidden lg:flex flex-1 items-center justify-end `}>
          {travelNavitems && travelNavitems.map((item) =>
            <button key={item}
              className={`uppercase text-gray-800 text-xs @2xl:text-sm font-bold focus:bg-green-300
           hover:bg-green-300 px-2 h-full py-1 rounded transition-all duration-300`}>{item}</button>
          )}
        </div>
        <div className='lg:hidden flex flex-1 items-center justify-end h-12 w-12 pr-4 '>
          <AlignJustify role='button' onClick={() => setOpen(!open)}
            className='hover:scale-90 transition-all duration-300 cursor-pointer' />
        </div>

      </nav>
      <MobileNav />
      {/* end of nav section */}
      <main className={`flex flex-col md:flex-row `}>
        
       
          <section className={`w-[350px] mx-auto md:mx-2 md:w-[450px] pl-12  h-auto p-5 mt-4 md:mt-36  `}>
            <h2 className={`text-2xl  text-green-400 font-bold`}>Switezerland Alps</h2>
            <h1 className={`text-4xl md:text-6xl font-extrabold text-green-200 uppercase`}>saint antonian</h1>
            
            <p className=' text-gray-200 py-3 mb-2'>Lorem ipsum hsdhsj Lorem ipsum hsdhsj Lorem ipsum hsdhsj hjsjjj corporis ea?</p>
           <div className='flex items-center justify-start gap-5'>
            <button className={` rounded-full h-10 w-10 bg-green-700 text-white flex items-center justify-center hover:scale-95 transition-all duration-300`}><MapPin size={20} /></button>
            <button className={`flex items-center rounded-full h-10 px-3 text-white capitalize border-2 border-white  hover:scale-95 transition-all duration-300`}> explore locations</button>
            </div>
          </section>
          <section className={`@container relative flex flex-col flex-1 gap-5  h-[345px] mt-3 lg:mt-48 px-10 py-5 rounded-md  mx-5 bg-black/50 `}>
            <div className='w-full h-60 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4   overflow-hidden '>
            {count && count.map((item,i)=>
            <div key={i}
            style={{ backgroundImage: `url(${corosalImage1[item].url})` }} 
             className={`h-60 w-full rounded-md bg-cover  `}></div>
            )}
            </div>
              <Next className='absolute right-3 top-[40%]' onClick={handleNextFunc}></Next>
              <Previous className='absolute left-3 top-[40%]' onClick={handlePreviousFunc}/>
         <div className='w-full h-12 flex items-center justify-start gap-3 '>
              <Previous className='h-12 w-12 border border-gray-500' onClick={handlePreviousFunc}/>
              <Next className='h-12 w-12 border border-gray-500' onClick={handleNextFunc}/>
              <div className='flex-1 h-[1px] bg-gray-500'/>
              <h2 className='text-white text-2xl w-12'>{count[0]+1}</h2>
         </div>
          </section>
        


      </main>

    </section>
  )
}

import { ChevronRight } from 'lucide-react'
import { cn } from '../../../../lib/twMerge'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
}
 function Next({ children, className,...props }: Props) {
  return (
    <button type="button" {...props}
      id="next" 
      className={cn(` h-10 w-10 rounded-full bg-black/40 text-white
                 hover:scale-95 flex items-center justify-center transition-all duration-300 
                 disabled:pointer-events-none disabled:opacity-100 disabled:text-pink-600`, className)}
      aria-label="Next">
      <ChevronRight size={24} />
      {children}
    </button>
  )
}

function Previous({children,className,...props}:Props) {
    return (
      <button type="button"
                      id="next" {...props}
                      className={cn(` h-10 w-10 rounded-full bg-black/40 text-white
                   hover:scale-95 flex items-center justify-center transition-all duration-300 
                   disabled:pointer-events-none disabled:opacity-100 disabled:text-pink-600`,className)}
                      aria-label="Previous">
                      <ChevronLeft size={24} />
                      {children}
                  </button>
    )
  }