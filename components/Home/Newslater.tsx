import React from 'react'
import Image from 'next/image'

export default function Newslater() {
  return (
    <div className='relative bg-white text-white rounded-lg overflow-hidden'>
        {/* Background Image */}
        <Image 
           src="/images/Newslater-banner.PNG"
           alt='Newslater banner'
           layout="responsive" 
           width={500}
           height={300}
           className='w-full h-80 object-cover'
        />  
    </div>
  )
}


