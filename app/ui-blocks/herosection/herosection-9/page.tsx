"use client"
import { AlignLeft, Plus, Search } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
export default function Herosection9() {
    
    return (
        <div className='h-screen w-full bg-gray-50 dark:bg-slate-800 pt-4'>
            <nav className={` h-12 w-full gap-5 @lg:gap-10 flex items-center justify-start px-2 @lg:px-7 @2xl:px-16`}>
                <div className={`h-10 w-24 rounded-full bg-blue-100 flex items-center justify-start px-1`}>
                    <div className={`h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center`}>
                        <AlignLeft size={20} />
                    </div>

                </div>
                <div className='flex items-center justify-start space-x-3 @lg:space-x-5 @2xl:space-x-7'>
                    <Link href={''} className={`hover:text-blue-500 text-sm @lg:text-base font-bold hover:scale-95 transition-all duration-300`}>About</Link>
                    <Link href={''} className={`hover:text-blue-500 text-sm @lg:text-base font-bold hover:scale-95 transition-all duration-300`}>Gallery</Link>
                    <Link href={''} className={`hover:text-blue-500 text-sm @lg:text-base font-bold hover:scale-95 transition-all duration-300`}>Contact Us</Link>
                </div>
            </nav>
            <main className='flex  justify-center px-4 @lg:px-8 @2xl:px-16 overflow-hidden h-[90%]'>
                <section className='flex flex-col space-y-10 max-w-lg items-center @lg:items-start'>
                    <div className="relative  w-80 h-11 border  rounded-md mt-10 ">
                        <input className="h-full w-full rounded-md focus:outline-none px-5 border focus:border-blue-500" placeholder="Search ...." />
                        <Search size={20} className='absolute top-2.5 right-1' />
                    </div>
                    <h1 className='text-2xl @lg:text-4xl @2xl:text-5xl text-center '> Work With Team and Increase Your Skill</h1>
                    <h6 className='text-base @lg:text-base @2xl:text-xl text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magnam illo similique minima, maxime consequuntur aspernatur magni debitis assumenda eaque, sint explicabo ipsum, doloribus quam.</h6>
                    <div className="w-48 h-10">
                        <button className={`bg-blue-500 w-full h-10  shadow-xl 
                         shadow-blue-300 rounded-full text-center text-blue-undefined
                          text-white font-bold text-base  hover:opacity-90 hover:scale-95 transition duration-300 
                          flex items-center justify-center gap-4`}><span><Plus size={20}/></span>Joun Us</button>
                    </div>
                </section>
                <section className='flex-1 relative mt-36 '>
                    <div className={`absolute hidden md:flex top-32 left-0 h-[550px] w-[500px] bg-blue-500 rounded-3xl -rotate-[30deg] origin-top-left`}>
                        <img src="/image/landing1.png" alt="team picture" className='h-full w-full object-contain rotate-[30deg] pb-32'/>
                    </div>

                </section>

            </main>

        </div>
    )
}

