import React from 'react'
import './Footer.scss'
import { Link } from "react-router-dom";
import Logo from '../../Image/whiteLogo.png'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="upBox">
                <div className="leftBox">
                    <img src={Logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                    <div className="socialBox">
                        <div className="iconBox"><FaFacebook /></div>
                        <div className="iconBox"><FaWhatsapp /></div>
                        <div className="iconBox"><FaLinkedin /></div>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="oneBox">
                        <Link className='link'>About Us</Link>
                        <Link className='littleLink'>Who we are?</Link>
                        <Link className='littleLink'>Services</Link>
                        <Link className='littleLink'>Partners</Link>
                        <Link className='littleLink'>Our Team</Link>
                        <Link className='littleLink'>FAQ</Link>
                    </div>
                    <div className="oneBox">
                        <Link className='link'>Contact</Link>
                        <Link className='littleLink'>Contact Us</Link>
                        <Link className='littleLink'>Address</Link>
                    </div>
                    <div className="downBox">
                        <div className="iconBox"><FaFacebook /></div>
                        <div className="iconBox"><FaWhatsapp /></div>
                        <div className="iconBox"><FaLinkedin /></div>
                    </div>
                </div>
            </div>

            <div className="lineBox">
                <p>© 2024 Created by PM Systems</p>
            </div>
        </footer>
    )
}

export default Footer