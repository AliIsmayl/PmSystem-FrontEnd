import React from 'react'
import AboutHeader from '../Components/AboutComponents/AboutHeader/AboutHeader'
import Faq from '../Components/HomeComponents/Faq/Faq'
import WhoWeAre from '../Components/AboutComponents/WhoWeAre/WhoWeAre';
import WhatWeOffer from '../Components/AboutComponents/WhatWeOffer/WhatWeOffer';
import OurPartners from '../Components/AboutComponents/OurPartners/OurPartners';
import MeetOurTeam from '../Components/AboutComponents/MeetOurTeam/MeetOurTeam';

function AboutPage() {
  return (
    <div style={{ background: "linear-gradient(180deg, rgba(10,11,15,1) 41%, rgba(18,17,19,1) 75%)" }}>

      <AboutHeader />
      <WhoWeAre/>
      <WhatWeOffer/>
      <OurPartners/>
      <MeetOurTeam/>
      <Faq />
    </div>
  )
}

export default AboutPage