import React, { useEffect, useState } from 'react';
import './ServiceAllPackets.scss';
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from 'axios';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

function ServiceAllPackets() {
    const [service, setService] = useState([]);
    const [language, setLanguage] = useState(i18next.language);

    async function getData() {
        try {
            const res = await axios.get('https://pmsystems.az/qrcode/service_details/');
            setService(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData();

        const handleLanguageChange = (lng) => {
            setLanguage(lng);
        };

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const languageKey = language.toLocaleUpperCase();

    return (
        <section id='serviceAllPackets'>
            {service.length > 0 ? (
                service.map((item, index) => {
                    // Son tek sayılı öğe
                    const isLastItem = index === service.length - 1 && service.length % 2 !== 0;

                    if (index % 2 === 0 && service[index + 1]) {
                        return (
                            <div key={index} className="upBox"
                                data-aos={index % 4 === 0 ? "fade-left" : "fade-right"}
                                data-aos-duration="1000">
                                <div id="cardBig" style={{ width: index % 4 === 0 ? "58%" : "43%" }} className='cardHover'>
                                    <Link to={`detail/${item.id}`} className="arrowBox" >
                                        <IoIosArrowRoundForward />
                                    </Link>
                                    {index}
                                    <h1 style={{ maxWidth: "70%" }}>{item[languageKey].LargeHeadName}</h1>
                                    <p>{item[languageKey].LittleTextInfo}</p>
                                    {item.id}
                                </div>
                                <div id="cardSmall" style={{ width: index % 4 === 0 ? "40%" : "55%" }} className='cardHover'>
                                    <div className="arrowBox">
                                        <IoIosArrowRoundForward />
                                    </div>
                                    {index + 1}
                                    <h1>{service[index + 1][languageKey].LargeHeadName}</h1>
                                    <p>{service[index + 1][languageKey].LittleTextInfo}</p>
                                    {service[index + 1].id}
                                </div>
                            </div>
                        );
                    } else if (isLastItem) {
                        return (
                            <div key={index} className="upBox"
                                data-aos="fade-left"
                                data-aos-duration="1000">
                                <div id="cardBig" style={{ width: "100%", backgroundColor: "red" }} className='cardHover'>
                                    <div className="arrowBox">
                                        <IoIosArrowRoundForward />
                                    </div>
                                    {index}
                                    <h1 style={{ maxWidth: "70%" }}>{item[languageKey].LargeHeadName}</h1>
                                    <p>{item[languageKey].LittleTextInfo}</p>
                                    {item.id}
                                </div>
                            </div>
                        );
                    } else if (index % 2 !== 0) {
                        return null;
                    }
                })
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
}

export default ServiceAllPackets;
