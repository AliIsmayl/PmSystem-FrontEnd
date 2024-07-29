import React, { useState } from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Image/whiteLogo.png'
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

function Navbar() {
    const [openLangBox, setOpenLangBox] = useState(false)
    const [whichLang, setWhichLang] = useState('AZ')
    const languages = ["AZ", "EN", "RU"];
    const filteredLanguages = languages.filter(lang => lang !== whichLang);


    function handleOpenLangBox() {
        setOpenLangBox(!openLangBox)
    }
    return (
        <nav>
            <img src={Logo} alt="" />
            <div className="textAndLangBox">
                <ul>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : "link"
                    }>
                        <li>
                            Home
                        </li>
                        <div className="line">

                        </div>
                    </NavLink>
                    <NavLink to={"/about"} className={({ isActive }) =>
                        isActive ? "active" : "link"
                    }>
                        <li>
                            About Us
                        </li>
                        <div className="line">

                        </div>
                    </NavLink>
                    <NavLink to={"/service"} className={({ isActive }) =>
                        isActive ? "active" : "link"
                    }>
                        <li>
                            Service
                        </li>
                        <div className="line">
                        </div>
                    </NavLink>
                    <NavLink to={"/contact"} className={({ isActive }) =>
                        isActive ? "active" : "link"
                    }>
                        <li>
                            Contact
                        </li>
                        <div className="line">

                        </div>
                    </NavLink>
                </ul>
                <div className="selectBox">
                    <div className='mainLang' onClick={handleOpenLangBox}>
                        <p style={{ fontSize: "20px" }}>{whichLang}</p>
                        <IoIosArrowDown />
                    </div>
                    <div className={`allLangsBox ${openLangBox ? "opened" : ""}`}>
                        {filteredLanguages.map(lang => (
                            <div
                                key={lang}
                                className='langBox'
                                onClick={() => {
                                    setWhichLang(lang);
                                    setOpenLangBox(false);
                                }}>
                                {lang}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="menuBox">
                <HiMenu />
            </div>
        </nav>
    )
}

export default Navbar