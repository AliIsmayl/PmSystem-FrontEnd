import React from 'react'
import './Footer.scss'
import { Link } from "react-router-dom";
import Logo from '../../Image/whiteLogo.png'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { TfiEmail } from "react-icons/tfi";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="upBox">
                <div className="leftBox">
                    <img src={Logo} alt="" />
                    <p>{t("FooterHeadText")}</p>
                    <div className="socialBox">
                        <Link className="iconBox" to={"https://api.whatsapp.com/send?phone=994553432143"}><FaWhatsapp /></Link>
                        <Link className="iconBox" to={"https://www.linkedin.com/company/pmsystems/"}><FaLinkedin /></Link>
                        <Link className="iconBox" to={"mailto:info@pmsystems.az"}><TfiEmail /></Link>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="oneBox">
                        <Link to={"/about"} className='link'>{t("AboutUSLittle")}</Link>
                        <Link to={"/about"} className='littleLink'>{t("WhoWeAre")}</Link>
                        <Link to={"/about"} className='littleLink'>{t("Services")}</Link>
                        <Link to={"/about"} className='littleLink'>{t("Partners")}</Link>
                        <Link to={"/about"} className='littleLink'>{t("OurTeam")}</Link>
                        <Link to={"/about"} className='littleLink'>{t("FAQ")}</Link>
                    </div>
                    <div className="oneBox">
                        <Link to={"/contact"} className='link'>{t("Contact")}</Link>
                        <Link to={"/contact"} className='littleLink'>{t("ContactUs")}</Link>
                        <Link to={"/contact"} className='littleLink'>{t("Address")}</Link>
                    </div>
                    <div className="downBox">
                        {/* <Link className="iconBox"><FaFacebook /></Link> */}
                        <Link className="iconBox" to={"https://api.whatsapp.com/send?phone=994553432143"}><FaWhatsapp /></Link>
                        <Link className="iconBox" to={"https://www.linkedin.com/company/pmsystems/"}><FaLinkedin /></Link>
                        <Link className="iconBox" to={"mailto:info@pmsystems.az"}><TfiEmail /></Link>
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