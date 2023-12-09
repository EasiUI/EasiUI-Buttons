'use client'
import React, { useContext } from 'react'
import { GripHorizontal } from 'lucide-react'
interface Props{
  icon:string
  title:string
  amount:string
  paid:boolean
}

export default function CardBlock1({icon,title,amount,paid}:Props) {

  return (
    <section className='flex items-center justify-center h-96 w-80'>
    <div className={`h-auto  border  rounded-md w-full hover:shadow-lg bg-white dark:bg-slate-800 dark:border-gray-600 dark:shadow-gray-700`}>
      <div className={`w-full h-20  flex items-center justify-between px-5 rounded-t-md`}>
        <div className={`flex items-center justify-start space-x-2`}>
          <div className={`flex items-center justify-center h-10 w-10 bg-white rounded-md border-b`}>
              <div className={` ${paid?'bg-blue-600 -rotate-6':'bg-black'} h-6 w-6  text-white text-center rounded-md rotate-6 `}>
                  {icon}
              </div>
          </div>
          <h1 className={`text-xl font-semibold text-green-500`}>{title}</h1>

        </div>
        <GripHorizontal className='text-gray-500 rounded-full hover:opacity-75' size={20} role='button'
        onClick={()=>{}}
        />
      </div>
      <div className='px-5'>
      <div className='flex items-center justify-between  h-12 border-b dark:border-gray-600'>
        <h1 className={`text-gray-400`}>Last Invoice</h1>
        <h1 className={`text-gray-400`}>Nov 21, 2023</h1>
      </div>
      <div className='flex items-center justify-between  h-12 '>
        <h1 className={`text-gray-400`}>Amount</h1>
        <div className={`flex items-center space-x-1`}>
          <p className='font-semibold '>${amount}</p>
          <button className={`${paid?'bg-green-100 border-green-700 text-green-700':'border-pink-600 text-pink-600 bg-pink-100'} border   text-[12px] h-5 px-2  rounded-md`}>{paid?"Paid":"Overdue"}</button>
        </div>
      </div>
      </div>
      
    </div>
    </section>
  )
}
