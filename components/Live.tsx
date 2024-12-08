import React from 'react'
import Image from 'next/image'

export default function Live () {
  return (
     <div className='relative bg-white rounded-lg overflow-hidden'>
        {/* Background Image */}
        <Image 
           src="/images/Live-banner.PNG"
           alt='Live banner'
           layout="responsive" 
           width={500}
           height={300}
           className='w-full h-80 object-cover'
      />
    </div>  
  )
}


