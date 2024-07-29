import React from 'react'
import './Header.scss'
import Image from '../../Image/Header.png'
import { IoIosArrowRoundForward } from "react-icons/io";

function Header() {
    return (
        <header style={{ backgroundImage: `url(${Image})` }}>
            <p>BEST IT SOLUTION & COMPANY IN GLOBAL COMMUNITY</p>
            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span>
            <div className="exploreBtn">
                <span>Explore</span>
                <div className="arrow">
                    <IoIosArrowRoundForward />
                </div>
            </div>
        </header>
    )
}

export default Header