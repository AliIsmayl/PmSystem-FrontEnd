import React from 'react';
import './OurPartners.scss';
import { useTranslation } from 'react-i18next';
import Partner1 from '../../../Image/Partner1.png';
import Partner2 from '../../../Image/Partner2.png';
import Partner3 from '../../../Image/Partner3.png';
import Partner4 from '../../../Image/Partner4.png';
import Partner5 from '../../../Image/Partner5.png';
import Partner6 from '../../../Image/Partner6.png';

function OurPartners() {
    const { t } = useTranslation();

    return (
        <section id='ourPartners'>
            <h1 data-aos="fade-right" data-aos-duration="1000">{t("OurPartners")}</h1>
            <div class="marquee">
                <div class="marquee__inner-wrap">
                    <div class="marquee__inner">
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner1})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner2})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner3})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner4})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner5})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner6})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner1})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner2})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner3})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner4})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner5})`}}></div>
                        <div class="marquee__img" style={{backgroundImage:`url(${Partner6})`}}></div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurPartners;
