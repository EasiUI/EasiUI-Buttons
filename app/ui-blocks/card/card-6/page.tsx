'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BaggageClaim, Flower, LandPlot, TentTree } from 'lucide-react'
interface Props {
    icon: string
    mainHeading: string
    text: string
    className?:string
}

export default function CardBlock6({ icon:Icon,  mainHeading, text ,className}: Props) {
   
    return (
        <>
            <nav className={`w-full    rounded-md overflow-hidden bg-white relative h-80 shadow-xl dark:bg-gray-800 hover:border-teal-600 border-2 dark:border-gray-600 `}>
            <div className='mt-3 h-[40%] w-full overflow-hidden flex items-center justify-center'>
                {/* <Icon strokeWidth={"1px"} className='h-20 w-20 ' /> */}
                </div>
                <div className='h-full w-full px-5 py-2 text-center '>
                    <p className={`text-sx font-bold text-teal-500`}>Lorem</p>
                    <p className='text-gray-400 text-center text-sx '>Lorem  Eexationem! Architecto, consequuntur aliquam!</p>
                    <button className={`mt-5 px-5 py-2 bg-teal-500 hover:scale-105 rounded-md border shadow-md shadow-teal-500 font-extrabold text-white transition duration-300 `}>
                    click Me
                </button>
                </div>
                <div className={`absolute top-10 right-0 bg-pink-500 h-6 w-12 rounded-l-xl`}>
                    <p className='text-xs text-center py-[3px] text-white'>PLUS</p>
                </div>
            </nav>

        </>
    )
}
