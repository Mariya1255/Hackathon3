import React from 'react';
import Image from 'next/image';

export default function FooterCopy5() {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-80">
      <Image
          src="/images/Footer2-banner.PNG" 
          alt="Footer1 banner"
          layout="responsive" 
          width={300}
          height={200}
          objectFit="w-full h-80 object-cover"
        />
        <Image
          src="/images/Last.PNG" 
          alt="Last"
          layout="responsive" 
          width={300}
          height={200}
          objectFit="w-full h-80 object-cover"
        />
      </div>
    </div>
  );
}
 

