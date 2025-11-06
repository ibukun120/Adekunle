import React from 'react'
import FirstHalf from './FirstHalf'
import SecondHalf from './SecondHalf'

const Joint = () => {
  return (
    <div className='bg-[#0F52BA] flex gap-4 px-4 md:px-12 lg:px-24 py-16 md:py-18'>
      <FirstHalf/>
      <SecondHalf/>
    </div>
  )
}

export default Joint
