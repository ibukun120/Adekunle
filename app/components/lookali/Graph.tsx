import Image from 'next/image'
import React from 'react'

const Graph = () => {
  return (
    <div className='bg-[#009933] px-6 md:px-16 lg:px-24 py-16 text-white'>
      <h1 className='text-4xl font-semibold'>User Research</h1>

      <div className='flex justify-between mt-10'>
        <div className=''>
          <Image src='/images/lookali/graph1.png' alt='graph1' width={270} height={300} className='sm:w-24 h-32 md:w-[326px] md:h-[261px]'/>
        </div>
        <div className=''>
          <Image src='/images/lookali/graph2.png' alt='graph2' width={350} height={400} className='sm:w-24 h-32 md:w-[421px] md:h-[258px]'/>
        </div>
      </div>


      <div className='flex justify-between mt-14 '>
        <div className=''>
          <Image src='/images/lookali/graph3.png' alt='graph3' width={400} height={400} className='sm:w-24 sm:h-32 md:w-[431px] md:h-[261px]'/>
        </div>
        <div className=''>
          <Image src='/images/lookali/graph4.png' alt='graph4' width={350} height={400} className='sm:w-24 sm:h-32 md:w-[334px] md:h-[256px] mr-0 md:mr-18 '/>
        </div>
      </div>
      
    </div>
  )
}

export default Graph
