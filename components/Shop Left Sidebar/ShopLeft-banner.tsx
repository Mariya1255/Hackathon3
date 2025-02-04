import React from 'react'
import Image from 'next/image'
export default function  ShopLeftbanner() {
  return (
    <div className='relative bg-white text-white rounded-lg overflow-hidden' >
        {/* Background Image */}
        <Image 
           src="/images/ShopLeft-Banner.PNG"
           alt='ShopLeft Banner'
           layout="responsive"
           width={300}
           height={200}
           className='w-full h-80 object-cover'
        />
    </div>
  )
}


