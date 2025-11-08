import React from 'react'
import Home from '../components/lookali/Home'
import Preview from '../components/lookali/Preview'
import LookaliOverview from '../components/lookali/LookaliOverview'
import User from '../components/lookali/User'
import Graph from '../components/lookali/Graph'
import UserFlow from '../components/lookali/UserFlow'
import Sketch from '../components/lookali/Sketch'
import WireFrame1 from '../components/lookali/WireFrame1'
import WireFrame2 from '../components/lookali/WireFrame2'
import StyleGuide from '../components/lookali/StyleGuide'

const page = () => {
  return (
    <div className='mt-12 md:mt-20'>
      <Home/>
      <Preview/>
      <LookaliOverview/>
      <Graph/>
      <User/>
      <UserFlow/>
      <StyleGuide/>
      <Sketch/>
      <WireFrame1/>
      <WireFrame2/>
    </div>
  )
}

export default page
