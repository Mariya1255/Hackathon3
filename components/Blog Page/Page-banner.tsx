import React from 'react'
import Image from 'next/image'

export default function Pagebanner () {
  return (
    <div className='relative bg-white rounded-lg overflow-hidden'>
    {/* Background Image */}
    <Image 
       src="/images/BlogPage-banner.PNG"
       alt='BlogPage banner'
       layout="responsive"
       width={300}
       height={200}
       className='w-full h-80 object-cover'
    />
</div>
  )
}


