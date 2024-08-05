import React from 'react'
import './WhyChooseUs.scss'
import Choose1image from '../../../Image/Choose1.png'
import Choose2image from '../../../Image/Choose2.png'
import Choose3image from '../../../Image/Choose3.png'
import Choose4image from '../../../Image/Choose4.png'
import { useTranslation } from 'react-i18next';

function WhyChooseUs() {
    const { t } = useTranslation();

    return (
        <section id='whyChooseUs'>
            <div data-aos="fade-right" data-aos-duration="1000" className="upTextBox">
                <p>{t("WhyChooseUs")}</p>
            </div>
            <div className="downTextBox">
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose1image} alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">{t("WhyChoose1")}</h1>
                    <p data-aos="fade-right" data-aos-duration="1300">{t("WhyChooseAnswer1")}</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose2image} alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">{t("WhyChoose2")}</h1>
                    <p data-aos="fade-right" data-aos-duration="1300">{t("WhyChooseAnswer2")}</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose3image} alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">{t("WhyChoose3")}</h1>
                    <p data-aos="fade-right" data-aos-duration="1300">{t("WhyChooseAnswer3")}</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose4image} alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">{t("WhyChoose4")}</h1>
                    <p data-aos="fade-right" data-aos-duration="1300">{t("WhyChooseAnswer4")}</p>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs