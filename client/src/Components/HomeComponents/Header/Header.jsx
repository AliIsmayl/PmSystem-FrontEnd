import React from 'react'
import './Header.scss'
import Image from '../../../Image/Header.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id='homeHeader' style={{ backgroundImage: `url(${Image})` }}>
            <p>BEST IT SOLUTION & COMPANY IN GLOBAL COMMUNITY</p>
            <span>Together with SAP, we make your business processes more efficient and competitive by providing innovative and reliable solutions. Our goal is to contribute to your company's success and ensure your continuous growth.</span>
            <Link to={'https://partnerfinder.sap.com/'} className="exploreBtn">
                <span>Explore</span>
                <div className="arrow">
                    <IoIosArrowRoundForward />
                </div>
            </Link>
        </header>
    )
}

export default Header