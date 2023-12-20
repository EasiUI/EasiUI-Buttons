'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { AlignCenter } from 'lucide-react';

export default function Herosection10() {
  
  const [typeEffect] = useTypewriter({
    words: [
      'Development',
      'Designing',
      'Educational Projects',
      'Freelancing',
      'Coding',
    ],
    //@ts-ignore
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  const menue = ['Home', 'About', 'Contact', 'Gallary', 'More'];

  return (
    <div
      className="relative bg-[url('/image/dark.jpeg')] w-full h-screen 
    bg-no-repeat bg-cover bg-center bg-fixed "
    >
      <div className="absolute top-0 left-0">
        <Image
          src={'/image/butterfly.png'}
          width={200}
          height={200}
          alt="logo"
        />
      </div>
      <div className={`hidden md:block fill-green-700`}>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={``}
            fill-opacity="0.3"
            d="M0,320L120,282.7C240,245,480,171,720,133.3C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <div className="absolute top-0 left-0 flex flex-row h-[10%] w-full items-center justify-end  ">
          <ul className="w-[35%] px-10 flex flex-row items-center justify-between">
            {menue.map((item, i) => (
              <li key={i} className="relative group">
                <a href="/ui" className="text-cyan-100">
                  {item}
                </a>
                <div
                  className={`absolute bottom-[-5px] left-0 h-[3px]
               w-0 group-hover:w-full bg-green-300 transition-all duration-700`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-16 text-white md:hidden'>
        <AlignCenter size={24} className='bg-white/50 rounded-md' />
      </div>
     
      <div
        className="md:absolute md:top-[40%] md:left-[36%]
       flex flex-col items-center justify-center mt-32 md:mt-1"
      >
        <div className="relative text-5xl font-bold my-5 text-gray-100 ">
          WELCOME...
          <h1 className={`absolute top-0 left-0 text-5xl font-bold h-full w-0 overflow-hidden animate-animate text-green-300 `}>
            WELCOME...
          </h1>
        </div>

        <p className="text-lg text-gray-100">
          khadfgh adrrgjsb dljbljsdlbj adlfjgljdb
        </p>
        <div className="flex flex-row items-center justify-between mt-6">
          <button className="relative z-0 group overflow-hidden mx-5 my-4 px-7 py-1 h-auto w-auto font-bold bg-transparent text-cyan-100 text-lg border-[2px] border-cyan-200 rounded-full ">
            <span className={`absolute text-sm left-0 bottom-0 h-full w-0 group-hover:w-full z-[-1] rounded-full bg-green-500 transition-all duration-700`}></span>
            Sign In
          </button>
          <button className="relative z-0 group overflow-hidden mx-5 my-4 px-7 py-1 h-auto w-auto font-bold bg-transparent text-cyan-100 text-lg border-[2px] border-cyan-200 rounded-full ">
            <span className={`absolute text-sm left-0 bottom-0 h-full w-0 group-hover:w-full z-[-1] rounded-full bg-green-500  transition-all duration-700`}></span>
            Sign Up
          </button>
        </div>
      </div>
       {/* typewriter */}
       <div className="md:absolute md:left-10 md:top-[70%]  h-10 w-auto px-5 my-10">
        <div className="text-xl text-white font-semibold">
          You are on the Wright Place for
        </div>

        <span className=" text-[#FC6D6D] text-4xl border-r-[1px] border-[#FC6D6D]">
          {typeEffect}
        </span>
      </div>
 {/* typewriter */}
    </div>
  );
}
