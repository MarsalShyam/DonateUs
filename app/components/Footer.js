import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const footerline1="2025 DonateUs | All rights reserved.";

  return (
    <footer className='bg-black text-white flex flex-col md:flex-row items-center justify-center px-4 h-16 gap-1 md:gap-10'>
        <p className='text-center'>&copy; {footerline1}</p>
        <div className='flex'>   
            <span><Link href="#">Terms of Use</Link></span>
            <span><pre> | </pre></span>
            <span><Link href="#">Privacy Policy</Link></span>
        </div>
    </footer>

  )
}

export default Footer

// Terms of Use | Privacy Policy