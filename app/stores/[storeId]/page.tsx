'use client'

import { useParams } from 'next/navigation';

export default function Store() {
  const storeId = useParams().storeId

  return (
    <main 
    className='
    '
    >
      store {storeId} here
    </main>
  )
}
