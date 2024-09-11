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

    const getElementPosition = (id) => {
        const element = document.getElementById(id);
        if (element) {
            return element.offsetTop;
        }
        return 0;
    };

    // Pozisyonu biraz yukarı kaydırmak için manuel ofset ekledik (örn: -100px)
    const scrollToTop = (position = 0) => {
        window.scrollTo({
            top: position - 100, // 100 piksel yukarı kaydırma ekleniyor
            behavior: 'smooth'
        });
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
                            onClick={() => location.pathname === "/about" ? scrollToTop(getElementPosition("aboutHeader")) : null}
                        >
                            {t("AboutUSLittle")}
                        </Link>
                        <Link
                            to={"/about"}
                            className='littleLink'
                            onClick={() => location.pathname === "/about" ? scrollToTop(getElementPosition("whoWeAre")) : null}
                        >
                            {t("WhoWeAre")}
                        </Link>
                        <Link
                            to={"/about"}
                            className='littleLink'
                            onClick={() => location.pathname === "/about" ? scrollToTop(getElementPosition("partners")) : null}
                        >
                            {t("Partners")}
                        </Link>
                        <Link
                            to={"/about"}
                            className='littleLink'
                            onClick={() => location.pathname === "/about" ? scrollToTop(getElementPosition("meetOurTeam")) : null}
                        >
                            {t("OurTeam")}
                        </Link>
                        <Link
                            to={"/about"}
                            className='littleLink'
                            onClick={() => location.pathname === "/about" ? scrollToTop(getElementPosition("faq")) : null}
                        >
                            {t("FAQ")}
                        </Link>
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
                            onClick={() => location.pathname === "/contact" ? scrollToTop(getElementPosition("contactUs")) : null}
                        >
                            {t("ContactUs")}
                        </Link>
                        <Link
                            to={"/contact"}
                            className='littleLink'
                            onClick={() => location.pathname === "/contact" ? scrollToTop(getElementPosition("address")) : null}
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
