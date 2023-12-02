
import React from 'react'
export default function MenubarButton() {
    

    return (
        <div >
            <div className={`  w-[400px] bg-green-600 flex items-center justify-center gap-10 pb-3`}>
            <button className={` w-20 h-9 bg-green-600  text-base 
              text-white  cursor-pointer
             duration-300 relative overflow-hidden after:h-[2px]  first-line:border-gray-200
             after:w-full after:bottom-0 after:right-full after:bg-white
             after:absolute hover:after:translate-x-full after:duration-300 `}>Home</button>
            <button className={` w-20 h-9 bg-green-600  text-base 
              text-white  cursor-pointer
             duration-300 relative overflow-hidden after:h-[2px]  first-line:border-gray-200
             after:w-full after:bottom-0 after:right-full after:bg-white
             after:absolute hover:after:translate-x-full after:duration-300 `}>Easi Block</button>
            </div >

        </div>
    )
}
