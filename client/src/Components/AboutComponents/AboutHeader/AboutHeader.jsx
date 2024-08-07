import React from 'react'
import './AboutHeader.scss'
import Image from '../../../Image/AboutHeader.png'
import { useTranslation } from 'react-i18next';

function AboutHeader() {
    const { t } = useTranslation();

    return (
        <header id='aboutHeader' style={{ backgroundImage: `url(${Image})` }}>
            <p>{t("AboutUS")}</p>
            <span>{t("AboutHeadText")}</span>
        </header>
    )
}

export default AboutHeader