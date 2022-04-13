import Head from "next/head"
import Typed from 'react-typed';
import { useEffect } from "react";
export default function Items() {
  useEffect(()=>{
    localStorage.setItem('active','/')
  },[])
  return (
    <div className="h-screen">
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="p-10 text-center text-4xl font-semibold text-[#FA58B6] ">
        <Typed
            strings={["Welcome to 0xtickets", "Experience Tickets in a whole new way", "Get Your Tickets Now!!"]}
            typeSpeed={40}
            backSpeed={40}
            smartBackspace
            loop
          />
        </div>
      </div>
    </div>
  )
}