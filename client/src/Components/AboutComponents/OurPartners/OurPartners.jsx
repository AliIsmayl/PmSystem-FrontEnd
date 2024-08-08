import React from 'react'
import './OurPartners.scss'
import { useTranslation } from 'react-i18next';

function OurPartners() {
    const { t } = useTranslation();

    return (
        <section id='ourPartners'>
            <h1 data-aos="fade-right" data-aos-duration="1000">{t("OurPartners")}</h1>
            <article class="main-container__marquee">
                <div class="main-container__marquee-track">
                    <div class="main-container__marquee-items">
                        <div className='margueeLink'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
                        </div>
                        <div className='margueeLink'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
                        </div>
                        <div className='margueeLink'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
                        </div>
                        <div className='margueeLink'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
                        </div>
                    </div>
                    <div class="main-container__marquee-items">
                        <div className='margueeLink'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
                        </div>
                        <div className='margueeLink'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
                        </div>
                        <div className='margueeLink'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
                        </div>
                        <div className='margueeLink'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="" />
                        </div>
                    </div>

                </div>
            </article>
        </section>
    )
}

export default OurPartners