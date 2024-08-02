import React from 'react'
import './WhoWeAre.scss'
import BackgroundImage from '../../../Image/BackgroundAbout.png'

function WhoWeAre() {
    return (
        <section id='whoWeAre' style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <h1 data-aos="fade-right" data-aos-duration="1000">Who we are?</h1>
            <div className="textBox">
                <span data-aos="fade-right" data-aos-duration="1000">We have the capability to provide solutions for various governmental and non-governmental organizations that comply with legislation worldwide.</span>
                <p data-aos="fade-left" data-aos-duration="1000">At PM System, we are committed to redefining business success with our innovative and high-impact solutions. Our expert team combines deep industry knowledge with cutting-edge technology to deliver customized and reliable services tailored to your unique needs. From comprehensive project management to advanced system optimization, we ensure every aspect of your project is handled with the utmost precision and excellence. Our passion for excellence drives us to support and elevate your business, transforming challenges into opportunities for growth. Partner with us and experience how our dedication and expertise can propel your business to new heights.</p>
            </div>
        </section>
    )
}

export default WhoWeAre