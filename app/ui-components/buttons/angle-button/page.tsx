import React from 'react'
export default function AngleButton() {
    

    return (
        <div className='flex items-center justify-center h-full mt-10'>
            <div className={` h-32 w-60 bg-black flex items-center justify-center`}>
            <button className={` w-32 h-10 bg-black  text-lg  text-white relative before:absolute before:w-2/3 before:h-2/3 before:top-0 before:left-0 before:border-t before:border-l before:border-white before:border-solid after:absolute after:w-2/3 after:h-2/3 after:right-0 after:bottom-0 after:border-b after:border-r after:border-white after:border-solid hover:after:w-full hover:after:h-full hover:before:w-full hover:before:h-full before:duration-300 after:duration-300 hover:opacity-95 hover:scale-95 transition duration-300 `}>Easi UI</button>
            </div >

        </div>
    )
}