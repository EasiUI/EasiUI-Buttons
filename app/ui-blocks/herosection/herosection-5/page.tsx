"use client"
import {  ChevronRight } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
export const travelNavitems=["home","Countries","places","blog","contact"]
export default function Herosection5() {
  const [open, setOpen] = useState<boolean>(false)
  const [themeColor, setThemeColor] = useState("blue")
  const [roundedSize, setRoundedSize] = useState("rounded-md")
  
  
  function MobileNav() {
    return (
      <div className={`${open ? "flex" : "hidden"} absolute z-20 left-0 top-12 w-full h-auto bg-white/90  px-4 py-2  flex-col @lg:flex-row`} >
        {travelNavitems && travelNavitems.map((item) =>
          <button key={item}
            className={`uppercase text-gray-800 text-xs md:text-sm font-bold focus:bg-teal-300
               hover:bg-teal-300 px-2 h-full py-1 rounded transition-all duration-300`}>{item}</button>
        )}
      </div>
    )
  }

  return (
    <section style={{ backgroundImage: `url(/image/lake.jpg)` }}
      className={` h-screen w-full bg-cover relative overflow-hidden `}>
      {/* nav section */}

      <MobileNav />

      <div className="h-full w-full flex  bg-transparent md:[clip-path:polygon(0%_0%,60%_0%,40%_100%,0%_100%)]">
        <div className='absolute top-0 left-[30%]  h-[35%] w-[20%] bg-black/40 hidden md:block
        md:[clip-path:polygon(0%_0%,50%_100%,66%_73%,30%_0%)]' />
        <div className={`bg-transparent md:bg-teal-100  dark:bg-neutral-950 h-full w-full md:[clip-path:polygon(0%_0%,30%_0%,40%_35%,43%_25%,49%_45%,58%_0%,72%_0%,40%_100%,20%_100%,0%_70%)] `}>
          <div className={`z-30 flex flex-col items-center justify-center md:items-start
          pt-32 px-5 md:px-10 `}>

            <h1 className={`text-4xl lg:text-7xl text-teal-900 dark:text-teal-300 font-extrabold z-10`}>TRAVEL</h1>
            <h1 className={`text-3xl lg:text-6xl text-teal-800  z-10`}>ADVENTURE</h1>
            <p className='w-72 md:text-base lg:w-96 md:text-left text-white text-center md:text-neutral-700 lg:text-xl dark:text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil suscipit voluptatem perspiciatis perferendis eius nesciunt, eos delectus doloremque nobis dolorum! Enim in unde magni!</p>
          <button className='flex items-center justify-center border-b-2 border-gray-700
           dark:border-gray-200 text-xl font-bold  uppercase mt-4'>Read Now <ChevronRight/></button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

