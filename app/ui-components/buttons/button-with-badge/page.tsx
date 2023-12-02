import React from 'react'

export default function page() {
  return (
    <div className='flex items-center justify-center h-full mt-10'>
    <div className='relative'>
                <button type="button" className={`text-white relative bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-800 w-32 h-10 rounded-md}  hover:bg-gradient-to-br  focus:outline-none  font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 `}>
                    <span></span><p>New Arrival</p></button>
                <div className='absolute -top-2 -right-1'>
                <span className="relative flex h-4 w-4">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-4 w-4 bg-emerald-500`}></span>
                </span>
                </div>
            </div >
            </div >
  )
}
