'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
interface Props {
    img?: string
    name: string
    mainHeading: string
    text: string
    className?:string
}

export default function CardBlock4({ img, name, mainHeading, text ,className}: Props) {
    
   
    return (
        <>
            <nav className={`w-96 p-4  bg-green-500 rounded-lg  relative h-56 shadow-xl dark:hover:shadow-gray-700 hover:shadow-green-400  `}>
                <div className='h-[85%] w-[55%] bg-white absolute top-4 -left-7 shadow-xl grid place-items-center rounded-l-md'>
                    <img src="/card/cardimg9.jpeg" alt="" className='w-[80%] h-auto'/>
                </div>
                <div className={`h-[85%] w-[45%] z-10 absolute top-4 right-4 flex flex-col items-start pl-8 py-5`} >
                  <h6 className='text-sm text-yellow-300 font-bold '>{name}</h6>
                  
                   <h1 className='text-white text-xl'>{mainHeading}</h1>
                    <p className='text-gray-200 text-sm'> {text} .. <span className='text-white font-bold'>read more </span></p>

                </div>
                <div className='absolute top-7 left-[42%] h-12 w-12  rounded-full ring-4   overflow-hidden'>
                    <img src="/avatar/avatar2.jpeg" alt="" className='h-full w-full object-contain scale-110 '/>
                </div>

            </nav>

        </>
    )
}
