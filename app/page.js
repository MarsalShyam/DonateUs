"use client"
import React from 'react';
import {useSession,signIn,signOut} from "next-auth/react"
import Services from './components/Servises.js';
import About from './components/About.js';


export default function Home() {
  return (
    <>
    <div className="m-8 flex justify-center flex-col items-center text-white h-[44vh] gap-3">
      <div className="font-bold text-5xl">
        Donate Us for Hunger
      </div>
      <p>
        A crowdFunding platfrom for hungry people . How loss there family in coal mine in Dhanabad.
      </p>
      <div>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10">
    </div>
    <div className='bg-white'>
    <Services/>
    </div>
    
    <div className="bg-white h-1 opacity-10">
    </div>
    <div>
      <About/>
    </div>
    <div>
      <About/>
    </div>
    </>
  );
}
// to-[#FFFFFF]
// bg-gradient-to-b from-[#00091dca] to-[#e9710e]