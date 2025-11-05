import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-white text-black px-4 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-0'>
      {/* fisrt image */}
      <div className='w-full md:w-1/2'>
        <Image src='/images/peakwise/Frame39.png' alt='Frame39.png' width={400} height={200} className='md:mt-8'/>
      </div>

      {/* second image */}
      <div className='w-full md:w-1/2'>
        <Image src='/images/peakwise/Group36.png' alt='Group36.png' width={400} height={700}/>
      </div>
    </div>
  )
}

export default Home
