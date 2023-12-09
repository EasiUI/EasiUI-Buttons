"use client"
import React, { useContext, useRef, useState } from 'react'
import AI from './AI';
import { Scale, ShoppingBag, ShoppingCartIcon } from 'lucide-react';
import AI2 from './AI2';
import { useRandomColor } from '../../RandomColor';
import { usefalseOutside } from '../../usefalseOutside';
import { cn } from '../../../lib/twMerge';

export default function Auth() {
  const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    usefalseOutside(wrapperRef, setIsOpen);
 const randomcolor= useRandomColor()
  return (
    <div className='h-full w-auto flex items-center justify-center gap-2 relative'>
      <h1 className='text-sm text-gray-500'>Welcome Devid</h1>
      <div role='button' onClick={()=>setIsOpen(!isOpen)} className={`h-10 w-10 rounded-full overflow-hidden ring ring-blue-100`} >
        <img src="/avatar/avatarimg1.jpg" alt="Avatar Image" className="h-full w-full bg-cover" />
      </div>
      <div ref={wrapperRef} className={cn('h-auto w-52 absolute top-12 right-0 bg-white z-30 flex flex-col py-2 divide-y divide-gray-100 border rounded-lg',!isOpen && 'hidden')}>
        <div className='px-3 py-2'>
          <h3 className='text-sm font-semibold text-gray-500'>Hello Devid Smith</h3>
          <h3 className='font-thin truncate '>devid.smith@gmail.com</h3>
        </div>
        <AI ><a href="#">My Profile</a></AI>
        <AI ><a href="#">Account Setting</a></AI>
        <div>
        <AI ><ShoppingBag size={20} className={`text-${randomcolor}-500`} /><a href="#">My Purchased</a></AI>
        <AI ><ShoppingCartIcon size={20} className={`text-${randomcolor}-500`}/><a href="#">Cart</a></AI>
        <AI ><Scale size={20} className={`text-${randomcolor}-500`}/><a href="#">Balance</a></AI>
        </div>
        <AI2 menu={["Sign Up","Sign In","Log Out","profile"]}>Hello</AI2>
       
        <AI className='text-gray-600' ><button onClick={()=>setIsOpen(false)}><a href="#">Log Out</a></button></AI>
      </div>
    </div>


  )
}
