

import React, { useContext} from 'react'
export default function GlowingButton() {
   

    return (
        <>
            <div className={`w-48 h-12`}>
                <button className={`w-full h-full bg-sky-600  shadow-xl  shadow-sky-300 text-center text-base text-white font-bold   hover:opacity-90 hover:scale-95 transition duration-300`}>
                    Easi UI
                </button>
            </div >

        </>
    )
}
