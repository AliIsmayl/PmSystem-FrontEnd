import React from 'react'
import './WhyChooseUs.scss'
import Choose1image from '../../../Image/Choose1.png'
import Choose2image from '../../../Image/Choose2.png'
import Choose3image from '../../../Image/Choose3.png'
import Choose4image from '../../../Image/Choose4.png'

function WhyChooseUs() {
    return (
        <section id='whyChooseUs'>
            <div data-aos="fade-right" data-aos-duration="1000" className="upTextBox">
                <p>Why Choose
                    Us?</p>
            </div>
            <div className="downTextBox">
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose1image} alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">Adaptability for Rapid Success</h1>
                    <p data-aos="fade-right" data-aos-duration="1300">Our agile approach ensures swift adaptation to your evolving needs, allowing for quick and effective project completion. We excel in a dynamic business environment by offering flexible solutions tailored to your specific requirements.</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose2image} alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">Unwavering Reliability</h1>
                    <p data-aos="fade-right" data-aos-duration="1300">We prioritize your security by protecting data and project details with top-tier safety measures. Our unwavering commitment to reliability guarantees secure and dependable service throughout every stage of your project.</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose3image} alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">Excellence in Every Detail</h1>
                    <p data-aos="fade-right" data-aos-duration="1300">We uphold the highest quality standards, executing each project with meticulous precision and excellence. Our rigorous quality control ensures that you receive exceptional results and complete satisfaction.</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose4image} alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">Adherence to Global Standards</h1>
                    <p data-aos="fade-right" data-aos-duration="1300">Our solutions are meticulously aligned with international standards, ensuring precise compliance with your needs. By integrating modern standards, we deliver superior quality and reliability for your business operations.</p>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs