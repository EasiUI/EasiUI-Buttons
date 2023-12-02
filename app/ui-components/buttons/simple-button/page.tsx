import React from 'react'

export default function SimpleButton() {
  return (
    <div className='flex items-center justify-center h-full mt-10'>
                {/* <button className={`${bgColor} ${width} ${textFieldHight}    ${rounded} text-center text-${bg}-${textWeight} text-white font-bold text-${textSixeFinal}  hover:opacity-90 hover:scale-95 transition duration-300`}> */}
                <button className={` w-24 h-10 rounded-md font-semibold hover:bg-sky-600 border border-sky-600 text-sky-600 bg-sky-100 hover:text-white`}>
                    Easi UI
                </button>
            </div >
  )
}
