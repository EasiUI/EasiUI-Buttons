'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { GripHorizontal, Mail, PhoneCall, X } from 'lucide-react'
import { cn } from '../../../../lib/twMerge'
interface Props {
    img?: string
    name: string
    designation: string
    admin: boolean
    className?:string
}

export default function CardBlock2({ img, name, designation, admin ,className}: Props) {
   
    
    return (
        <section className='flex items-center justify-center h-96 w-80'>
        <nav className={cn(`h-auto    bg-rose-100 dark:bg-slate-800 border-rose-300 rounded-lg border dark:border-gray-600 w-full hover:shadow-md hover:shadow-gray-500`,className)}>
            <section className={`w-full h-24  flex items-center justify-between px-5 `}>
                <div>
                    <div className={`flex  items-center justify-start gap-3`}>
                        <h1 className={` font-bold text-rose-500`}>{name}</h1>
                        <button className={`${admin ? 'bg-green-100 border-green-700 text-green-700' : 'border-yellow-600 text-yellow-600 bg-yellow-100'} border   text-[12px] h-5 px-2  rounded-full`}>{admin ? "Admin" : "Developer"}</button>
                    </div>
                    <p className='text-sm'>{designation}</p>
                </div>
                {/* Avatar */}
                <div className={`h-10 w-10 rounded-full overflow-hidden ring-2`}>
                    <img src={img} alt="" className='h-full w-full object-contain scale-105'/>
                </div>
            </section>
            <section className='grid grid-cols-2 '>

                <div className={`group flex items-center justify-center space-x-3 h-14 w-full cursor-pointer border-t border-r border-rose-300 dark:border-gray-600 hover:text-rose-500`}>
                    <Mail size={18} className='' />
                    <h1 className={`text-sm font-bold group-hover:scale-95`}>Email</h1>
                </div>
                <div role='button' 
                 className={`group flex items-center justify-center space-x-3 h-14 cursor-pointer w-full border-t dark:border-gray-600 border-rose-300 hover:text-rose-500 `}>
                    <PhoneCall size={16} />
                    <h1 className={`text-sm font-bold group-hover:scale-95`}>Call</h1>
                </div>
            </section>
            

        </nav>
        </section>
    )
}
