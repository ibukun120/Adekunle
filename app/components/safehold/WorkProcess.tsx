import React from 'react'

const WorkProcess = () => {
  return (
    <div className='bg-white text-black px-4 md:px-12 lg:px-24 py-8 md:py-16'>
      <h1 className='text-[#008000] font-bold text-2xl'>Work Process</h1>

      <div className=''>
        <div className='flex gap-4 justify-between mt-14'>
          <h1 className='bg-[#00800014] text-[#008000] rounded w-1/4 text-center py-4 md:py-6 font-bold text-xs md:text-base'>Research</h1>
        <h1 className='bg-[#00800061] text-[#008000] rounded w-1/4 text-center py-4 md:py-6 font-bold text-xs md:text-base'>Wireframe</h1>
        <h1 className='bg-[#008000A6] text-white rounded w-1/4 text-center py-4 md:py-6 font-bold text-xs md:text-base'>Ui Design</h1>
        <h1 className='bg-[#008000] text-white rounded w-1/4 text-center py-4 md:py-6 font-bold text-xs md:text-base'>Testing</h1>
        </div>
      </div>
    </div>
  )
}

export default WorkProcess
