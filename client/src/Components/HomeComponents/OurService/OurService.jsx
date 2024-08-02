import React from 'react'
import './OurService.scss'
import BackroundImage from '../../../Image/Background.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function OurService() {
    return (
        <section id='ourService' style={{ backgroundImage: `url(${BackroundImage})` }} >
            <div className="leftBox">
                <h1>Our
                    Services</h1>
                <div className="viewHiddenBtn">
                    <p>View All</p>
                </div>
                <p>PM System delivers tailored, high-quality, and reliable solutions to our clients. With our experienced team and cutting-edge technology, we ensure the success of your projects and provide strong support for your business growth.</p>
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
            </div>
        </section>
    )
}

export default OurService