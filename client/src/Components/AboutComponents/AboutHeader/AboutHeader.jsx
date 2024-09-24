import React from 'react'
import './AboutHeader.scss'
import Image from '../../../Image/AboutHeader.png'
import { useTranslation } from 'react-i18next';
import Video from '../../../Video/Video1.mp4'

function AboutHeader() {
    const { t } = useTranslation();

    return (
        <header id='aboutHeader' >
            <video autoPlay muted loop src={Video} />

            <div className="normalBox">
                <h1>{t("AboutUS")}</h1>
                <h2>{t("AboutHeadText")}</h2>
            </div>
        </header>
    )
}

export default AboutHeader