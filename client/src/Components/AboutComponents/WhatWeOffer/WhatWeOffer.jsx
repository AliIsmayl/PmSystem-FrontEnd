import React, { useEffect, useState } from 'react'
import './WhatWeOffer.scss'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import axios from 'axios';

function WhatWeOffer() {
    const { t } = useTranslation();
    const [service, setService] = useState([]);
    const [language, setLanguage] = useState(i18next.language);

    async function getData() {
        try {
            const res = await axios.get('https://api.pmsystems.az/qrcode/service_details/');
            setService(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        getData();

        const handleLanguageChange = (lng) => {
            setLanguage(lng);
            getData();
        };

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const languageKey = language.toLocaleUpperCase();
    return (
        <section id='whatWeOffer'>
            <div className="leftBox">
                <h1>{t("WhatWeOffer")}</h1>
                <div className="viewHiddenBtn">
                    <p>{t("ViewAll")}</p>
                </div>
                <Link to={"/service"} className="viewAllBtn">
                    <p>{t("ViewAll")}</p>
                    <div className="arrow">
                        <span></span>
                        <div className="arrowHead">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </Link>

            </div>
            <div className="rightBox">
                {service.length > 0 ? (
                    service.slice(0, 5).map((item, index) => {
                        const nextItem = service[index + 1];

                        // Eğer dil anahtarı mevcut değilse fallback olarak İngilizceyi kullan
                        const currentItem = item[languageKey] || item['EN'];
                        const nextItemData = nextItem ? (nextItem[languageKey] || nextItem['EN']) : null;

                        if (index < 4 && index % 2 === 0 && nextItemData) {
                            // İlk dört öğeyi mevcut şekilde göster
                            return (
                                <div key={index} className="upBox"
                                    data-aos={index % 4 === 0 ? "fade-left" : "fade-right"}
                                    data-aos-duration="1000">
                                    <div id="cardBig" style={{ width: index % 4 === 0 ? "58%" : "43%" }} className='cardHover'>
                                        <Link to={`/service/${item.id}`} className="arrowBox">
                                            <IoIosArrowRoundForward />
                                        </Link>
                                        <h1 style={{ maxWidth: "70%" }}>{currentItem.LargeHeadName}</h1>
                                        <p>{currentItem.LittleTextInfo}</p>
                                    </div>
                                    <div id="cardSmall" style={{ width: index % 4 === 0 ? "40%" : "55%" }} className='cardHover'>
                                        <Link to={`/service/${nextItem.id}`} className="arrowBox">
                                            <IoIosArrowRoundForward />
                                        </Link>
                                        <h1>{nextItemData.LargeHeadName}</h1>
                                        <p>{nextItemData.LittleTextInfo}</p>
                                    </div>
                                </div>
                            );
                        } else if (index === 4) {
                            // Beşinci öğeyi tam genişlikte göster
                            return (
                                <div key={index} className="upBox"
                                    data-aos="fade-left"
                                    data-aos-duration="1000">
                                    <div id="cardBig" style={{ width: "100%" }} className='cardHover'>
                                        <Link to={`/service/${item.id}`} className="arrowBox">
                                            <IoIosArrowRoundForward />
                                        </Link>
                                        <h1 style={{ maxWidth: "70%" }}>{currentItem.LargeHeadName}</h1>
                                        <p>{currentItem.LittleTextInfo}</p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>



        </section>
    )
}

export default WhatWeOffer