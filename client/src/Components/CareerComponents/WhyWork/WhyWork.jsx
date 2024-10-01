import React from 'react'
import './WhyWork.scss'
import { useTranslation } from 'react-i18next';
import Icon1 from '../../../Image/Careerİcon1.png'
import Icon2 from '../../../Image/Careerİcon2.png'
import Icon3 from '../../../Image/Careerİcon3.png'

function WhyWork() {
    const { t } = useTranslation();

    return (
        <section id='whyWork'>
            <h2>{t("WhyWorkHead")}</h2>
            <div className="downBox">
                <div className="card">
                    <div className="imgBox" style={{ backgroundImage: `url(${Icon1})` }}></div>
                    <p>{t("WorkBox1Head")}</p>
                    <span>{t("WorkBox1")}</span>
                </div>
                <div className="card">
                    <div className="imgBox" style={{ backgroundImage: `url(${Icon2})` }}></div>
                    <p>{t("WorkBox2Head")}</p>
                    <span>{t("WorkBox2")}</span>
                </div>
                <div className="card">
                    <div className="imgBox" style={{ backgroundImage: `url(${Icon3})` }}></div>
                    <p>{t("WorkBox3Head")}</p>
                    <span>{t("WorkBox3")}</span>
                </div>
            </div>
        </section>
    )
}

export default WhyWork