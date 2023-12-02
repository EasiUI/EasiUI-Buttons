import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='flex items-center justify-center h-full mt-10'>
                <button type="button" className={`text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 w-40 rounded-md h-10  hover:bg-gradient-to-br  focus:outline-none  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center justify-center space-x-4`}>
                    <p>Get Started</p><span><ArrowRight size={20}/></span></button>
                
            </div >
  )
}
