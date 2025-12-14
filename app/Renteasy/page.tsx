import Image from 'next/image'
import React from 'react'
import Home from '../components/rent/Home'
import RentText from '../components/rent/RentText'
import Variant from '../components/rent/Variant'
import Brands from '../components/rent/Brands'
import Color from '../components/rent/Color'
import Pics from '../components/rent/Pics'
import Last from '../components/rent/Last'

const page = () => {
  return (
    <div>
      <Home/>
      <RentText/>
      <Variant/>
      <Brands/>
      <Color/>
      <Pics/>
      <Last/>
      <div className="w-full h-12 md:h-22 2xl:h-32 bg-white"></div>
    </div>
  )
}

export default page
