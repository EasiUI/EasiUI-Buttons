'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
interface Props {
    img?: string
    mainHeading: string
    text: string
    className?:string
}

export default function CardBlock5({ img,  mainHeading, text ,className}: Props) {
   
    return (
        <>
            <nav className={`w-full    rounded-md overflow-hidden bg-white relative h-72 shadow-xl dark:hover:shadow-gray-700 hover:shadow-blue-400  `}>
            <div className='h-[50%] w-full overflow-hidden '>
                    <img src={img} alt="Alt Image Name"
                        className='bg-cover h-full w-full transform hover:scale-110 transition duration-300 hover:opacity-75' />
                </div>
                <div className='h-full w-full px-5 py-2'>
                    <h1 className={`  text-xl font-bold text-blue-500 `}>{mainHeading}</h1>
                    <p className='text-gray-700'>{text}</p>
                </div>
                <button className={`w-full font-extrabold uppercase h-10 text-white bg-blue-400 absolute bottom-0 left-0`}>
                    click to view details
                </button>

            </nav>

        </>
    )
}
