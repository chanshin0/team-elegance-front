'use client'

import { useParams } from "next/navigation"

export default function UserPage() {
  const userId = useParams().userId
  
  return (
    <main 
    className='
    '
    >
      {userId} user page
    </main>
  )
}
