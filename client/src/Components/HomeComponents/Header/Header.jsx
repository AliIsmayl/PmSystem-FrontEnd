import React from 'react'
import './Header.scss'
import Image from '../../../Image/Header.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
const { t } = useTranslation();

    return (
        <header id='homeHeader' style={{ backgroundImage: `url(${Image})` }}>
            {/* <p>Coming soon...</p>
            <h5>+994 55 343 21 43</h5>
            <h5>office@pmsystems.az</h5>
            <h5>46 Ashiq Molla Juma, Baku</h5> */}

            <p>{t("BstIt")}</p>
            <span>{t("TogetherWith")}</span>
            <Link to={'https://partnerfinder.sap.com/'} className="exploreBtn">
                <span>{t("Explore")}</span>
                <div className="arrow">
                    <IoIosArrowRoundForward />
                </div>
            </Link>
        </header>
    )
}

export default Header