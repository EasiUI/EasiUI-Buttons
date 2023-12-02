import React from 'react'

export default function GlowingButton() {
   

    return (
        <main className='h-screen w-full flex items-center justify-center'>
            <div className={`w-48 h-12 `}>
                <button className={`w-full h-full rounded-md bg-sky-600  shadow-lg  shadow-sky-500 text-center text-base text-white font-bold   hover:opacity-90 hover:scale-95 transition duration-300`}>
                    Easi UI
                </button>
            </div >

        </main>
    )
}
