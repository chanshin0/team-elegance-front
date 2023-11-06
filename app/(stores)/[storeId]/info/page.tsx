'use client'

import { useParams } from 'next/navigation';

export default function StoreInfo() {
  const storeId = useParams().storeId

  return (
    <main 
    className='
    '
    >
      store {storeId} info here
    </main>
  )
}
