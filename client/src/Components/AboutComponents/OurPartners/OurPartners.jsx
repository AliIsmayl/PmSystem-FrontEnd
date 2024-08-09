import React from 'react'
import './OurPartners.scss'
import { useTranslation } from 'react-i18next';
import Partner1 from '../../../Image/Partner1.png'
import Partner2 from '../../../Image/Partner2.png'
import Partner3 from '../../../Image/Partner3.png'
import Partner4 from '../../../Image/Partner4.png'
import Partner5 from '../../../Image/Partner5.png'
import Partner6 from '../../../Image/Partner6.png'

function OurPartners() {
    const { t } = useTranslation();

    return (
        <section id='ourPartners'>
            <h1 data-aos="fade-right" data-aos-duration="1000">{t("OurPartners")}</h1>
            <article class="main-container__marquee">
                <div class="main-container__marquee-track">
                    <div class="main-container__marquee-items">
                        <div className='margueeLink'>
                            <img src={Partner1} alt="" />
                            <img src={Partner2} alt="" />
                            <img src={Partner3} alt="" />
                            <img src={Partner4} alt="" />
                            <img src={Partner5} alt="" />
                            <img src={Partner6} alt="" />
                        </div>

                    </div>


                </div>
            </article>
        </section>
    )
}

export default OurPartners