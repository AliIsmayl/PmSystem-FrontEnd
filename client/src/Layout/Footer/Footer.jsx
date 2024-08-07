import React from 'react'
import './Footer.scss'
import { Link } from "react-router-dom";
import Logo from '../../Image/whiteLogo.png'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="upBox">
                <div className="leftBox">
                    <img src={Logo} alt="" />
                    <p>{t("FooterHeadText")}</p>
                    <div className="socialBox">
                        <div className="iconBox"><FaFacebook /></div>
                        <div className="iconBox"><FaWhatsapp /></div>
                        <div className="iconBox"><FaLinkedin /></div>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="oneBox">
                        <Link className='link'>{t("AboutUSLittle")}</Link>
                        <Link className='littleLink'>{t("WhoWeAre")}</Link>
                        <Link className='littleLink'>{t("Services")}</Link>
                        <Link className='littleLink'>{t("Partners")}</Link>
                        <Link className='littleLink'>{t("OurTeam")}</Link>
                        <Link className='littleLink'>{t("FAQ")}</Link>
                    </div>
                    <div className="oneBox">
                        <Link className='link'>{t("Contact")}</Link>
                        <Link className='littleLink'>{t("ContactUs")}</Link>
                        <Link className='littleLink'>{t("Address")}</Link>
                    </div>
                    <div className="downBox">
                        <div className="iconBox"><FaFacebook /></div>
                        <div className="iconBox"><FaWhatsapp /></div>
                        <div className="iconBox"><FaLinkedin /></div>
                    </div>
                </div>
            </div>

            <div className="lineBox">
                <p>{t("Created")}</p>
            </div>
        </footer>
    )
}

export default Footer