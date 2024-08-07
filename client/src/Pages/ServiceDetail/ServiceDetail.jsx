import React from 'react'
import './ServiceDetail.scss'
import Image from '../../Image/ServiceHeader.png'
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';

function ServiceDetail() {
    const { t } = useTranslation();

    return (
        <section id='serviceDetail'>
            <header id='serviceDetailHeader' style={{ backgroundImage: `url(${Image})` }}>
                <div className="goLink">
                    <span>{t("Services")}</span>
                    <IoIosArrowForward />
                    <span>SAP System</span>
                </div>
                <p>SAP systems implementation and technical support</p>
                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span>

            </header>
            <main>
                <div className="upBox" >
                    <div className="leftBox" data-aos="fade-right" data-aos-duration="1000">
                        <h1>Lorem İpsum</h1>
                        <p>Our mission at FUTURA XYZ is to revolutionize the world of 3D production by consistently pushing the boundaries of innovation and technology.


                            We are committed to delivering top-notch solutions that empower our clients to turn their creative visions into tangible realities. Lorem ipsum dolor</p>
                        <p style={{ textAlign: "end" }}>Our mission at FUTURA XYZ is to revolutionize the world of 3D production by consistently pushing the boundaries of innovation and technology.


                            We are committed to delivering top-notch solutions that empower our clients to turn their creative visions into tangible realities. Lorem ipsum dolor</p>
                    </div>
                    <div className="rightBox" data-aos="fade-left" data-aos-duration="1000">
                        <img src="https://i.pinimg.com/564x/be/b5/52/beb55249db6e4396aeac65abda74ab3d.jpg" alt="" />
                    </div>
                </div>
                <div className="downBox">

                    <div className="rightBox" data-aos="fade-right" data-aos-duration="1000">
                        <img src="https://i.pinimg.com/564x/be/b5/52/beb55249db6e4396aeac65abda74ab3d.jpg" alt="" />
                    </div>
                    <div className="leftBox" data-aos="fade-left" data-aos-duration="1000">
                        <h1>Lorem İpsum</h1>
                        <p style={{ textAlign: "end" }}>Our mission at FUTURA XYZ is to revolutionize the world of 3D production by consistently pushing the boundaries of innovation and technology.


                            We are committed to delivering top-notch solutions that empower our clients to turn their creative visions into tangible realities. Lorem ipsum dolor</p>
                        <p >Our mission at FUTURA XYZ is to revolutionize the world of 3D production by consistently pushing the boundaries of innovation and technology.


                            We are committed to delivering top-notch solutions that empower our clients to turn their creative visions into tangible realities. Lorem ipsum dolor</p>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default ServiceDetail