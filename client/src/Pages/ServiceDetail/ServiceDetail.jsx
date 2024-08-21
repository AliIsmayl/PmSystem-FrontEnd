import './ServiceDetail.scss';
import Image from '../../Image/ServiceHeader.png';
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import i18next from 'i18next';

function ServiceDetail() {
    const [detail, setDetail] = useState(null);
    const { id } = useParams();
    const [language, setLanguage] = useState(i18next.language);
    const { t } = useTranslation();

    async function getData() {
        try {
            const res = await axios.get(`https://pmsystems.az/qrcode/service_details/${id}`);
            console.log("Fetched Data:", res.data);
            setDetail(res.data);
        } catch (error) {
            console.error("Error fetching detail data:", error);
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
    }, [id]);



    if (!detail) {
        return <p>Loading...</p>;
    }

    const languageKey = localStorage.getItem("language") ? JSON.parse(localStorage.getItem("language")) : 'EN';

    console.log("Language Key:", languageKey);

    return (
        <section id='serviceDetail'>
            <header id='serviceDetailHeader' style={{ backgroundImage: `url(${Image})` }}>
                <div className="goLink">
                    <span>{t("Services")}</span>
                    <IoIosArrowForward />
                    <span>{detail[languageKey]?.name}</span>
                </div>
                <p>{detail[languageKey]?.LargeHeadName}</p>
                <span>{detail[languageKey]?.LittleTextInfo}</span>
            </header>
            <main>
                {detail[languageKey]?.DetailHeads?.map((headObj, index) => (
                    <div className="upBox" style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }} key={index}>

                        <div className="leftBox" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1000">
                            <h1>
                                {headObj.heads.map((h, subIndex) => (
                                    <span key={subIndex}>{h}</span>
                                ))}
                            </h1>
                            {detail[languageKey]?.DetailTexts[index] && (
                                <>
                                    <p>
                                        {detail[languageKey].DetailTexts[index].texts.map((t, textIndex) => (
                                            <span key={textIndex}>{t}</span>
                                        ))}
                                    </p>
                                </>
                            )}
                            {detail[languageKey]?.DetailTexts2[index] && (
                                <>
                                    <p style={{ textAlign: "end" }}>
                                        {detail[languageKey].DetailTexts2[index].texts_2.map((t, textIndex) => (
                                            <span key={textIndex}>{t}</span>
                                        ))}
                                    </p>
                                </>
                            )}
                        </div>
                        {index < detail[languageKey]?.Images?.length && (
                            <div className="rightBox" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-duration="1000">
                                <img src={detail[languageKey]?.Images[index]} alt={`image ${index + 1}`} />
                            </div>
                        )}
                    </div>
                ))}
            </main>
        </section>
    );
}

export default ServiceDetail;

