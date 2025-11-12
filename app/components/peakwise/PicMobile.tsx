import Image from 'next/image'
import React from 'react'

const PicMobile = () => {
  return (
      <div className="flex relative md:hidden justify-center items-start w-full py-10 px-4 md:px-12 lg:px-24 bg-white gap">
          {/* Image 1 */}
          <div className="w-1/2">
            <Image
              src="/images/peakwise/Group48.png"
              alt="Group48.png"
              width={300}
              height={800}
              className="object-cover"
            />
          </div>
    
          {/* Image 2 */}
          <div className="mt-12 -translate-4 w-1/2">
            <Image
              src="/images/peakwise/Group49.png"
              alt="Group49.png"
              width={300}
              height={800}
              className="object-cover"
            />
          </div>
        </div>
  )
}

export default PicMobile
