'use client'
import React, { useContext, useRef, useState } from 'react'
import { GripHorizontal, Mail, PhoneCall, X } from 'lucide-react'
import { DivC } from '../../../../hook/components/common'
interface Props {
    img?: string
    name: string
    designation: string
    admin: boolean
    className?:string
}
export default function CardBlock3({ img, name, designation, admin ,className}: Props) {
    return (
        
        <section className='flex items-center justify-center h-96 w-80'>
    
        <div className={`h-auto  border  w-full hover:shadow-xl rounded-sm bg-gray-100 dark:bg-gray-800 `}>
            <section className={`w-full h-72  flex flex-col items-center  pt-10 gap-1 `}>
            <div className={`h-28 w-28 rounded-full overflow-hidden `}>
                    <img src={img} alt="" className='h-full w-full object-cover'/>
                </div>                 
                        <button className={`${admin ? 'bg-green-200 border-green-700 text-green-700' : 'border-yellow-600 text-yellow-600 bg-yellow-200'} border   text-[12px] h-5 px-2 mt-5 rounded-full`}>{admin? "Admin" : "User"}</button>
                       <DivC>
                       <h1 className={` text-xl font-bold text-emerald-400`}>{name}</h1>
                        <p className='text-sm'>{designation}</p>
                       </DivC>
                        
            </section>
            <section className='grid grid-cols-2 '>

                <div className='flex items-center justify-center space-x-3 h-14 w-full cursor-pointer border-t border-r hover:bg-gray-400/10 '>
                    <Mail size={18} className='fill-gray-600 stroke-white' />
                    <h1 className={`text-sm font-bold `}>Email</h1>
                </div>
                <div role='button' onClick={()=>{}}
                 className='flex items-center justify-center space-x-3 h-14 cursor-pointer w-full border-t hover:bg-gray-400/10 '>
                    <PhoneCall size={16} />
                    <h1 className={`text-sm font-bold `}>Call</h1>
                </div>
            </section>
            

        </div>
        </section>
    )
}
