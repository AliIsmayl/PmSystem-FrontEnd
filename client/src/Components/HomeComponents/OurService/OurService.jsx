import React, { useEffect, useState } from 'react'
import './OurService.scss'
import BackroundImage from '../../../Image/Background.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';
import i18next from 'i18next';

function OurService() {
    const [service, setService] = useState([]);
    const { t } = useTranslation();
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
            getData();
        };

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const languageKey = language.toLocaleUpperCase();

    return (
        <section id='ourService' style={{ backgroundImage: `url(${BackroundImage})` }} >
            <div className="leftBox">
                <h1>{t("OurService")}</h1>
                <Link to={"/service"} className="viewHiddenBtn">
                    <p>{t("ViewAll")}</p>
                </Link>
                <p>{t("OurServiceAnswer")}</p>
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
                    service.slice(0, 6).map((item, index) => {
                        const isLastItem = index === service.length - 1 && service.length % 2 !== 0;
                        const nextItem = service[index + 1];

                        // Eğer dil anahtarı mevcut değilse fallback olarak İngilizceyi kullan
                        const currentItem = item[languageKey] || item['EN'];
                        const nextItemData = nextItem ? (nextItem[languageKey] || nextItem['EN']) : null;

                        if (index % 2 === 0 && nextItemData) {
                            return (
                                <Link to={`service/${item.id}`} key={index} className="upBox"
                                    data-aos={index % 4 === 0 ? "fade-left" : "fade-right"}
                                    data-aos-duration="1000">
                                    <div id="cardBig" style={{ width: index % 4 === 0 ? "58%" : "43%" }} className='cardHover'>
                                        <Link to={`service/${item.id}`} className="arrowBox" >
                                            <IoIosArrowRoundForward />
                                        </Link>
                                        <h1 style={{ maxWidth: "70%" }}>{currentItem.LargeHeadName}</h1>
                                        <p>{currentItem.LittleTextInfo}</p>
                                    </div>
                                    <div id="cardSmall" style={{ width: index % 4 === 0 ? "40%" : "55%" }} className='cardHover'>
                                        <Link to={`service/${item.id + 1}`} className="arrowBox">
                                            <IoIosArrowRoundForward />
                                        </Link>
                                        <h1>{nextItemData.LargeHeadName}</h1>
                                        <p>{nextItemData.LittleTextInfo}</p>
                                    </div>
                                </Link>
                            );
                        }
                        return null;
                    })
                ) : ("Loading")}
            </div>
        </section>
    )
}

export default OurService