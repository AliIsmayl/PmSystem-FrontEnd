import React, { useEffect } from 'react';
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs/WhyChooseUs';
import OurService from '../Components/HomeComponents/OurService/OurService';
import NextLevel from '../Components/HomeComponents/NextLevel/NextLevel';
import Faq from '../Components/HomeComponents/Faq/Faq';
import Header from '../Components/HomeComponents/Header/Header';

function Homepage() {

  return (
    <>
      <Header />
      <WhyChooseUs />
      <OurService />
      <NextLevel />
      <Faq going={true} />
    </>
  );
}

export default Homepage;
