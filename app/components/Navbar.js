"use client"
import {React,useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link'

const Navbar = () => {
  const [showdropdown,Setshowdropdown]=useState(false)

  const { data: session } = useSession()
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  const LINKS = [
    { text: "Home", targetId: "home" },
    { text: "About", targetId: "about" },
    { text: "Services", targetId: "services" },
    { text: "Contact", targetId: "contact" },
    { text: "Sign Up", targetId: "singup" },
    { text: "Login", targetId: "login" },


  ];

  return (
    <nav className='bg-gray-950 text-white flex justify-between items-center px-4 h-16'>
      <Link href="/" className='logo font-bold text-lg'>DonateUs</Link>
      

      {/* <ul className='flex justify-between gap-4'>
        {LINKS.map((link,index)=>(
                    <Link key={index} href={`#${link.targetId}`} className={`text-sm ${index!==0? "border-l-2 border-neutral-300/20 pl-2":""} hover:opacity-50`} onClick={(e)=>handleScroll(e,link.targetId)}>
                        {link.text}
                    </Link>
                ))}
        </ul> */}
      <div className='relative'>
        {session && 
          <><button onClick={()=>{Setshowdropdown(!showdropdown)}} onBlur={()=>{setTimeout(()=>{Setshowdropdown(false)},100);}} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
          <div id="dropdownInformation" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>
                  shyamGanesh
                </div>
                <div className="font-medium truncate">{session.user.email}</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                </li>
                <li>
                  <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                </li>
                
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                </li>
                
              </ul>
              <div className="py-2">
                <Link href="#" onClick={()=>{signOut()}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
              </div>
            </div></>
        }
       
        {session &&
          <Link href={"/logout"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { signOut() }} >Sign out</button>
          </Link>}
        {!session &&
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button>
          </Link>}
      </div>
    </nav>
  )
}

export default Navbar
