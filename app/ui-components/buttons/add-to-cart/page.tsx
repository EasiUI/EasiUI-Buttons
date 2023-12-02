import React from 'react'
import {  ShoppingCart } from 'lucide-react'

export default function page() {
  return (
    <div className='flex items-center justify-center h-full mt-10'>
                <button type="button" className={`text-white bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 w-40 h-10 rounded-md  hover:bg-gradient-to-br  focus:outline-none  font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center justify-center space-x-4`}>
                    <span><ShoppingCart size={20}/></span><p>Add To Cart</p></button>
                
            </div >
  )
}
