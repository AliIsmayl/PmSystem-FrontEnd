import React from 'react'
import './WhatWeOffer.scss'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function WhatWeOffer() {
  return (
    <section id='whatWeOffer'>
                <div className="leftBox">
                <h1>What we 
                offer?</h1>
                <div className="viewHiddenBtn">
                    <p>View All</p>
                </div>
                <div className="viewAllBtn">
                    <p>View All</p>
                    <div className="arrow">
                        <span></span>
                        <div className="arrowHead">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>

            </div>
            <div className="rightBox">
                <div className="upBox">
                    <div data-aos="fade-left" data-aos-duration="1000" id="cardBig" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1>Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" id="cardSmall" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1>Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>

                </div>
                <div className="upBox" >
                    <div id="cardBig2" data-aos="fade-left" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1 style={{ maxWidth: "70%" }}>Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                    <div id="cardSmall2" data-aos="fade-left" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1 >Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                </div>
                <div className="upBox" id='thirdBox'>
                    <div id="cardBig3" data-aos="fade-left" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1>Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default WhatWeOffer