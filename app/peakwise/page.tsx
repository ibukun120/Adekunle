// import React from 'react'

import Home from '../components/peakwise/Home'
import Overview from '../components/peakwise/Overview'
import OverviewText from '../components/peakwise/OverviewText'
import Pic from '../components/peakwise/Pic'

const page = () => {
  return (
    <div className='mt-12 md:mt-20'>
      <Home/>
      <Overview/>
      <OverviewText/>
      <Pic/>
    </div>
  )
}

export default page
