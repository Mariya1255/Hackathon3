import React from 'react'
import Image from 'next/image'

export default function Footer8 () {
  return (
    <div className='relative bg-white text-white rounded-lg overflow-hidden'>
        {/* Background Image */}
        <Image 
           src="/images/Footer-banner.PNG"
           alt='Footer banner'
           layout="responsive" 
           width={500}
           height={300}
           className='w-full h-80 object-cover'
        />  
        
    </div> 
  )
}


