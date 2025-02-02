'use client';

import React,{useEffect} from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Dash from "../components/Dash";



const Dashboard = () => {
    const {data:session}=useSession()
    const router=useRouter()

    useEffect(()=>{
      if(!session){
        router.push('/login')
    }
    },[session,router]);//Ensure it runs when session changes
    if(!session) return null;//prevent Rendering before redirect
    
  return (
    <>
    <Dash/>
    </>
    
  )
}

export default Dashboard
