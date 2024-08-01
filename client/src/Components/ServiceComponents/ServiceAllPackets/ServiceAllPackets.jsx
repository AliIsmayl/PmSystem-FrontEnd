import React from 'react'
import './ServiceAllPackets.scss'
import { IoIosArrowRoundForward } from "react-icons/io";

function ServiceAllPackets() {
    return (
        <section id='serviceAllPackets'>
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
                    <div id="cardBig2" data-aos="fade-right" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1 style={{ maxWidth: "70%" }}>Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                    <div id="cardSmall2" data-aos="fade-right" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1 >Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                </div>
                <div className="upBox" id='thirdBox'>
                    <div id="cardBig" data-aos="fade-left" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1>Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                    <div id="cardSmall" data-aos="fade-left" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1>Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                </div>
                <div className="upBox" >
                    <div id="cardBig2" data-aos="fade-right" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1 style={{ maxWidth: "70%" }}>Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                    <div id="cardSmall2" data-aos="fade-right" data-aos-duration="1000" className='cardHover'>
                        <div className="arrowBox">
                            <IoIosArrowRoundForward />
                        </div>
                        <h1 >Web Development</h1>
                        <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge </p>
                    </div>
                </div>
        </section>
    )
}

export default ServiceAllPackets