import React from 'react';
import './Footer.scss';
import { Link, useLocation } from "react-router-dom";
import Logo from '../../Image/whiteLogo.png';
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { TfiEmail } from "react-icons/tfi";

function Footer() {
    const { t } = useTranslation();
    const location = useLocation();

    const scrollToTop = (position = 0) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    };

    const handleScrollAddress = (defaultPosition) => {
        const screenWidth = window.innerWidth;
        return screenWidth < 500 ? 750 : defaultPosition;
    };
    const handleScrollContact = (defaultPosition) => {
        const screenWidth = window.innerWidth;
        return screenWidth < 500 ? 240 : defaultPosition;
    };
    const handleScrollWhoWeAre = (defaultPosition) => {
        const screenWidth = window.innerWidth;
        return screenWidth < 500 ? 660 : defaultPosition;
    };
    const handleScrollPartner = (defaultPosition) => {
        const screenWidth = window.innerWidth;
        return screenWidth < 500 ? 1450 : defaultPosition;
    };
    const handleScrollTeam = (defaultPosition) => {
        const screenWidth = window.innerWidth;
        return screenWidth < 500 ? 2020 : defaultPosition;
    };
    const handleScrollFAG = (defaultPosition) => {
        const screenWidth = window.innerWidth;
        return screenWidth < 500 ? 2710 : defaultPosition;
    };

    return (
        <footer>
            <div className="upBox">
                <div className="leftBox">
                    <img src={Logo} alt="" />
                    <p>{t("FooterHeadText")}</p>
                    <div className="socialBox">
                        <Link className="iconBox" to={"https://api.whatsapp.com/send?phone=994553432143"} target="_blank"><FaWhatsapp /></Link>
                        <Link className="iconBox" to={"https://www.linkedin.com/company/pmsystems/"} target="_blank"><FaLinkedin /></Link>
                        <Link className="iconBox" to={"mailto:info@pmsystems.az"} target="_blank"><TfiEmail /></Link>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="oneBox">
                        <Link
                            to={"/about"}
                            className='link'
                            onClick={() => location.pathname === "/about" ? scrollToTop() : null}
                        >
                            {t("AboutUSLittle")}
                        </Link>
                        <Link
                            to={"/about"}
                            className='littleLink'
                            onClick={() => location.pathname === "/about" ? scrollToTop(handleScrollWhoWeAre(600)) : null}
                        >{t("WhoWeAre")}</Link>
                        <Link
                            to={"/about"}
                            className='littleLink'
                            onClick={() => location.pathname === "/about" ? scrollToTop(handleScrollPartner(1400)) : null}>
                            {t("Partners")}</Link>
                        <Link
                            to={"/about"}
                            className='littleLink'
                            onClick={() => location.pathname === "/about" ? scrollToTop(handleScrollTeam(1900)) : null}>
                            {t("OurTeam")}</Link>
                        <Link
                            to={"/about"}
                            className='littleLink'
                            onClick={() => location.pathname === "/about" ? scrollToTop(handleScrollFAG(2550)) : null}>
                            {t("FAQ")}</Link>
                    </div>
                    <div className="oneBox">
                        <Link
                            to={"/contact"}
                            className='link'
                            onClick={() => location.pathname === "/contact" ? scrollToTop() : null}
                        >
                            {t("Contact")}
                        </Link>
                        <Link
                            to={"/contact"}
                            className='littleLink'
                            onClick={() => location.pathname === "/contact" ? scrollToTop(handleScrollContact(100)) : null}
                        >
                            {t("ContactUs")}
                        </Link>
                        <Link
                            to={"/contact"}
                            className='littleLink'
                            onClick={() => location.pathname === "/contact" ? scrollToTop(handleScrollAddress(100)) : null}
                        >
                            {t("Address")}
                        </Link>
                    </div>
                    <div className="downBox">
                        <Link className="iconBox" target="_blank" to={"https://api.whatsapp.com/send?phone=994553432143"}><FaWhatsapp /></Link>
                        <Link className="iconBox" target="_blank" to={"https://www.linkedin.com/company/pmsystems/"}><FaLinkedin /></Link>
                        <Link className="iconBox" target="_blank" to={"mailto:info@pmsystems.az"}><TfiEmail /></Link>
                    </div>
                </div>
            </div>

            <div className="lineBox">
                <p>{t("Created")}</p>
            </div>
        </footer>
    );
}

export default Footer;
