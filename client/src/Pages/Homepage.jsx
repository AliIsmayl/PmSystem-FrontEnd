import React from 'react'
import Header from '../Components/Header/Header'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs/WhyChooseUs'
import OurService from '../Components/HomeComponents/OurService/OurService'
import NextLevel from '../Components/HomeComponents/NextLevel/NextLevel'

function Homepage() {
  return (
    <>
      <Header />
      <WhyChooseUs/>
      <OurService/>
      <NextLevel/>
    </>
  )
}

export default Homepage