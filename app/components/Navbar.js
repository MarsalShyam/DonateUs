"use client"
import React from 'react';
import {useSession,signIn,signOut} from "next-auth/react"

import Link from 'next/link'

const Navbar = () => {

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
    const LINKS = [
        { text: "Home", targetId: "home" },
        { text: "About", targetId: "about" },
        { text: "Services", targetId: "services" },
        { text: "Contact", targetId: "contact" },
        {text:"Sign Up", targetId:"singup" },
        { text: "Login", targetId: "login" },
        

      ];

  return (
    <nav className='bg-gray-950 text-white flex justify-between items-center px-4 h-16'>
        <div className='logo font-bold text-lg'>Donate Us</div>
        {/* <ul className='flex justify-between gap-4'>
        {LINKS.map((link,index)=>(
                    <a key={index} href={`#${link.targetId}`} className={`text-sm ${index!==0? "border-l-2 border-neutral-300/20 pl-2":""} hover:opacity-50`} onClick={(e)=>handleScroll(e,link.targetId)}>
                        {link.text}
                    </a>
                ))}
        </ul> */}
        <div>
          <Link href={"/login"}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button>
        </Link>
        </div>
    </nav>
  )
}

export default Navbar
