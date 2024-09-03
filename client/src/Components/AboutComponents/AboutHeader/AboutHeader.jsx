import React from 'react'
import './AboutHeader.scss'
import Image from '../../../Image/AboutHeader.png'
import { useTranslation } from 'react-i18next';

function AboutHeader() {
    const { t } = useTranslation();

    return (
        <header id='aboutHeader' style={{ backgroundImage: `url(${Image})` }}>
            <h1>{t("AboutUS")}</h1>
            <h2>{t("AboutHeadText")}</h2>
        </header>
    )
}

export default AboutHeader