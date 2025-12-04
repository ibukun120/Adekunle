import Image from 'next/image'
// import React from 'react'

interface PriceProp {
  price: string,
}

const Tick = ({price}:PriceProp) => {
  return (
    <div className='flex items-center gap-1'>
      <Image src='/images/paylinq/Tick-Square.png' alt='Tick-Square' width={30} height={30} className='w-5 h-5'/>
      <span className='text-[#002366] text-[12.02px]'>{price}</span>
    </div>
  )
}

export default Tick
