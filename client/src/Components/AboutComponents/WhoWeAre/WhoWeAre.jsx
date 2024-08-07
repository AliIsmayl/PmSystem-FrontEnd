import React from 'react'
import './WhoWeAre.scss'
import BackgroundImage from '../../../Image/BackgroundAbout.png'
import { useTranslation } from 'react-i18next';

function WhoWeAre() {
    const { t } = useTranslation();

    return (
        <section id='whoWeAre' style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <h1 data-aos="fade-right" data-aos-duration="1000">{t("WhoWeAre")}</h1>
            <div className="textBox">
                <span data-aos="fade-right" data-aos-duration="1000">{t("WhoWeAreText1")}</span>
                <p data-aos="fade-left" data-aos-duration="1000">{t("WhoWeAreText2")}</p>
            </div>
        </section>
    )
}

export default WhoWeAre