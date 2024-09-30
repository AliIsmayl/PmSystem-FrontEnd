import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Image/whiteLogo.png";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Navbar() {
  const [openRespNavbar, setOpenRespNavbar] = useState(true);
  const [openLangBox, setOpenLangBox] = useState(false);
  const defaultLang = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : "EN";
  const [whichLang, setWhichLang] = useState(defaultLang);
  const languages = ["AZ", "EN", "RU"];
  const filteredLanguages = languages.filter((lang) => lang !== whichLang);
  const { t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);

  function changeLang(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", JSON.stringify(lang.toUpperCase()));
  }

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsScrolled(currentScrollPos > 100); // Arka plan renginin değişimini koruyoruz
  };

  function handleOpenNavbar() {
    setOpenRespNavbar(!openRespNavbar);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleOpenLangBox() {
    setOpenLangBox(!openLangBox);
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link
        to={"/"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="textAndLangBox">
        <ul>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>{t("Home")}</li>
            <div className="line"></div>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>{t("About")}</li>
            <div className="line"></div>
          </NavLink>
          <NavLink
            to={"/service"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>{t("Service")}</li>
            <div className="line"></div>
          </NavLink>
          <NavLink
            to={"/career"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>Career</li>
            <div className="line"></div>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>{t("Contact")}</li>
            <div className="line"></div>
          </NavLink>
        </ul>
        <div className="selectBox">
          <div className="mainLang" onClick={handleOpenLangBox}>
            <p style={{ fontSize: "20px" }}>{whichLang}</p>
            <IoIosArrowDown />
          </div>
          <div className={`allLangsBox ${openLangBox ? "opened" : ""}`}>
            {filteredLanguages.map((lang) => (
              <div
                key={lang}
                className="langBox"
                onClick={() => {
                  setWhichLang(lang);
                  setOpenLangBox(false);
                  changeLang(`${lang.toLowerCase()}`);
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="menuBox" onClick={handleOpenNavbar}>
        {openRespNavbar ? <HiMenu /> : <CgClose />}
      </div>
      <div className={`respNavbar ${openRespNavbar ? "openedNavbar" : ""}`}>
        <ul>
          <NavLink
            onClick={handleOpenNavbar}
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>{t("Home")}</li>
            <div className="line"></div>
          </NavLink>
          <NavLink
            onClick={handleOpenNavbar}
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>{t("About")}</li>
            <div className="line"></div>
          </NavLink>
          <NavLink
            onClick={handleOpenNavbar}
            to={"/service"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>{t("Service")}</li>
            <div className="line"></div>
          </NavLink>
          <NavLink
            onClick={handleOpenNavbar}
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li>{t("Contact")}</li>
            <div className="line"></div>
          </NavLink>
        </ul>
        <div className="selectBox">
          <div className="mainLang" onClick={handleOpenLangBox}>
            <p style={{ fontSize: "20px" }}>{whichLang}</p>
            <IoIosArrowDown />
          </div>
          <div className={`allLangsBox ${openLangBox ? "opened" : ""}`}>
            {filteredLanguages.map((lang) => (
              <div
                key={lang}
                className="langBox"
                onClick={() => {
                  setWhichLang(lang);
                  setOpenLangBox(false);
                  changeLang(`${lang.toLowerCase()}`);
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
