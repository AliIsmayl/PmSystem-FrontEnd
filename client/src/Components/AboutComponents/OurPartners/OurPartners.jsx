import React from 'react';
import './OurPartners.scss';
import { useTranslation } from 'react-i18next';
import Partner1 from '../../../Image/logo1.png';
import Partner2 from '../../../Image/logo2.png';
import Partner3 from '../../../Image/logo3.png';
import Partner4 from '../../../Image/logo4.png';
import Partner5 from '../../../Image/logo5.png';
import Partner6 from '../../../Image/logo6.png';
import Partner7 from '../../../Image/logo7.png';
import Partner8 from '../../../Image/logo8.png';
import Partner9 from '../../../Image/logo9.png';
import Partner10 from '../../../Image/logo10.png';
import Partner11 from '../../../Image/logo11.png';

const partners = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
    Partner9,
    Partner10,
    Partner11
];

function OurPartners() {
    const { t } = useTranslation();

    return (
        <section id='ourPartners'>
            <h1 data-aos="fade-right" data-aos-duration="1000">{t("OurPartners")}</h1>
            <div className="marquee">
                <div className="marquee__inner-wrap">
                    <div className="marquee__inner">
                        {partners.concat(partners[0]).map((partner, index) => (
                            <div
                                key={index}
                                className="marquee__img"
                                style={{ backgroundImage: `url(${partner})` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurPartners;
