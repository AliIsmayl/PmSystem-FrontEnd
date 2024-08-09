import React, { useEffect, useState } from 'react';
import './ServiceAllPackets.scss';
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from 'axios';

function ServiceAllPackets() {
    const [service, setService] = useState(null);

    async function getData() {
        try {
            const res = await axios.get('https://pmsystems.az/qrcode/service_details/');
            setService(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setService(null); // Handle fetch error
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const languageKey = "Az";

    return (
        <section id='serviceAllPackets'>
            {service && service[languageKey] ? (
                <>
                    <div className="upBox">
                        <div id="cardBig" data-aos="fade-right" data-aos-duration="1000" className='cardHover'>
                            <div className="arrowBox">
                                <IoIosArrowRoundForward />
                            </div>
                            <h1 style={{ maxWidth: "70%" }}>{service[languageKey].LargeHeadName}</h1>
                            <p>{service[languageKey].LittleTextInfo}</p>
                        </div>
                        <div id="cardSmall" data-aos="fade-right" data-aos-duration="1000" className='cardHover'>
                            <div className="arrowBox">
                                <IoIosArrowRoundForward />
                            </div>
                            <h1 >{service[languageKey].LargeHeadName}</h1>
                            <p>{service[languageKey].LittleTextInfo}</p>
                        </div>
                    </div>
                    <div className="upBox" >
                        <div id="cardBig2" data-aos="fade-right" data-aos-duration="1000" className='cardHover'>
                            <div className="arrowBox">
                                <IoIosArrowRoundForward />
                            </div>
                            <h1 style={{ maxWidth: "70%" }}>{service[languageKey].LargeHeadName}</h1>
                            <p>{service[languageKey].LittleTextInfo}</p>
                        </div>
                        <div id="cardSmall2" data-aos="fade-right" data-aos-duration="1000" className='cardHover'>
                            <div className="arrowBox">
                                <IoIosArrowRoundForward />
                            </div>
                            <h1 style={{ maxWidth: "70%" }}>{service[languageKey].LargeHeadName}</h1>
                            <p>{service[languageKey].LittleTextInfo}</p>
                        </div>
                    </div>
                </>



            ) : (
                <p>Not product...</p>
            )
            }
        </section >
    );
}

export default ServiceAllPackets;



{/* <div className="upBox" >
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
            </div> */}