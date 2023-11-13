'use client'

import Link from "next/link"
import { useState } from "react"

export default function TopNavBar() {
  const [userLocation, setUserLocation] = useState('너네집')

  return (
    <main 
    className='h-24 w-full flex justify-between items-center fixed top-0 shadow z-50
    md:max-w-7xl
    '
    >
      <div className="h-full w-1/3
      
      ">
        <Link href={'/'}>
          <img src="/assets/nav/logo_elegance.png" alt="team-elegance" className="max-h-full scale-125 ml-2 mt-1"/>
        </Link>
      </div>
      <div className="flex justify-end h-6 w-1/3 mr-4 font-bold
      
      ">
        <img src="/assets/nav/icon_location_sharp.png" alt="location"/>
        <p className="ml-2">{userLocation}</p>
      </div>
    </main>
  )
}
