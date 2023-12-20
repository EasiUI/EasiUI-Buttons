"use client"
import { AlignJustify, ArrowRight } from 'lucide-react'
import React, {  useState } from 'react'
const navitems = ["home", "about", "blog", "podcast", "offline courses", "mastermind", "success stories", "contact"]
export default function HeroSection1() {
  const [open, setOpen] = useState<boolean>(false)


  function MobileNav() {
    return (
      <div className={`${open ? "flex" : "hidden"} absolute z-20 left-0 top-12 w-full h-auto bg-white/90  px-4 py-2  flex-col md:flex-row`} >
        {navitems && navitems.map((item) =>
          <button key={item}
            className={`uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300`}>{item}</button>
        )}
      </div>
    )
  }
  function Menubar() {
    return (
      <nav className={`w-full h-12 flex items-center justify-start`}>
        <div className={`flex items-center justify-start gap-4 px-2 md:px-5 lg:px-10`}>
          <div className={`relative h-10 w-10 rounded-full bg-pink-500 `}>
            <span className='absolute text-3xl  left-6'>M</span>
          </div>
          <h3>Metyssa Graffin</h3>
        </div>
        <div className={`hidden lg:flex flex-1 items-center justify-end `}>
          {navitems && navitems.map((item) =>
            <button key={item}
              className={`uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
           hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300`}>{item}</button>
          )}
        </div>
        <div className='lg:hidden flex flex-1 items-center justify-end h-12 w-12 pr-4 '>
          <AlignJustify role='button' onClick={() => setOpen(!open)}
            className='hover:scale-90 transition-all duration-300 cursor-pointer' />
        </div>

      </nav>
    )
  }
  return (
    <section className={`w-full h-[700px] min-h-screen bg-pink-100`}>
      <Menubar></Menubar>
      <MobileNav />
      <main className={` w-full h-[90%] relative flex-col items-start lg:pt-14 mx-auto `}>
        <div className='absolute lg:-translate-x-44
           w-full     flex items-center justify-center '>
          <div className={`m-w-[200px] md:max-w-[350px]  border-b-[13px] border-yellow-500 px-0
          text-white lg:text-gray-800 text-3xl  text-center lg:text-left md:text-4xl lg:text-5xl`}>
            <p className='translate-y-3 pt-10 font-bold'> Lets grow <span className='text-white'>your </span>business f<span className='text-white'>rom </span> the inside <span className='text-white'>out. </span></p>
          </div>
        </div>
        <div className={`h-[80%] w-full flex justify-end`}>
          <img src="/image/picture6.jpg" alt="Hero Image"
           className={` w-full h-[70%] lg:h-full lg:w-[60%] rounded-md `}/>
        </div>
        {/* <div className=' '> */}
        <div className={`lg:absolute lg:top-80   w-[350px] mx-auto md:w-[450px]
         bg-pink-500 h-auto p-5  lg:p-8 py-2  lg:ml-96 -translate-y-48
          lg:translate-y-0 rounded-md `}>
          <p className='textlg md:text-[27px] font-semibold text-justify border-b border-gray-600 py-3'>
            <span className='text-white '>Take the Quiz!</span> Discover Your Money Magnetism Archetype
          </p>
          <p className=' text-gray-700 py-3 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error neque libero deleniti aliquam. Quod excepturi veniam deserunt placeat aliquid, ex nemo. Quae perferendis corporis ea?</p>
          <button className={`flex items-center gap-5 h-10 px-3 bg-white uppercase hover:scale-95 transition-all duration-300 rounded-md`}>
            Click here to take the Quiz <ArrowRight size={20} />
            </button>
        </div>
        {/* </div> */}
      </main>
    </section>
  )
}

