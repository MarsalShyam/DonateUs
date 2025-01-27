"use client"
import React from 'react'

const Navbar = () => {
    const LINKS = [
        { text: "Home", targetId: "home" },
        { text: "About", targetId: "about" },
        { text: "Services", targetId: "services" },
        { text: "Contact", targetId: "contact" },
        {text:"Sign Up", targetId:"singup" },
        { text: "Login", targetId: "login" },
        

      ];

  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16'>
        <div className='logo font-bold'>Donate Us</div>
        <ul className='flex justify-between gap-4'>
        {LINKS.map((link,index)=>(
                    <a key={index} href={`#${link.targetId}`} className={`text-sm ${index!==0? "border-l-2 border-neutral-300/20 pl-2":""} hover:opacity-50`} onClick={(e)=>handleScroll(e,link.targetId)}>
                        {link.text}
                    </a>
                ))}
        </ul>
    </nav>
  )
}

export default Navbar
