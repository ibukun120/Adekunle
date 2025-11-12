// import React from 'react'

import Home from '../components/peakwise/Home'
import Overview from '../components/peakwise/Overview'
import OverviewText from '../components/peakwise/OverviewText'
import Pic from '../components/peakwise/Pic'
import PicMobile from '../components/peakwise/PicMobile'
import ProjectNav from '../components/peakwise/ProjectNav'

const page = () => {
  return (
    <div className='mt-12 md:mt-20'>
      <Home/>
      <Overview/>
      <OverviewText/>
      <Pic/>
      <PicMobile/>
      <ProjectNav/>
    </div>
  )
}

export default page
