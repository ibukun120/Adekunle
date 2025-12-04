import Image from 'next/image'
import React from 'react'

const PicMobile = () => {
  return (
      <div className="md:hidden w-full py-4 px-4 bg-white">
          {/* Image 1 */}
          <div className="w-full">
            <Image
              src="/images/peakwise/Group4.png"
              alt="Group4.png"
              width={600}
              height={2000}
              className="object-cover w-full h-[2270px]"
            />
          </div>
    
          {/* Image 2 */}
          {/* <div className="mt-12 -translate-4 w-1/2">
            <Image
              src="/images/peakwise/Group49.png"
              alt="Group49.png"
              width={300}
              height={800}
              className="object-cover"
            />
          </div> */}
        </div>
  )
}

export default PicMobile
