import React, { useEffect, useRef } from "react";
import "./Header.scss";
import Video from "../../../Video/Video1.webm";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SAP from "../../../Image/sap2 (1).png";
import UAParser from "ua-parser-js";

function Header() {
  const { t } = useTranslation();
  const videoRef = useRef(null); // Video elementine referans

  useEffect(() => {
    const parser = new UAParser();
    const browser = parser.getBrowser();
    const video = videoRef.current;

    if (video) {
      video.muted = true; // Tüm tarayıcılarda otomatik oynatma için videoyu sessize alıyoruz
      video.play().catch((error) => {
        console.log("Autoplay hatası:", error);
      });

      // Safari için özel kontrol
      if (browser.name === "Safari") {
        video.play().catch((error) => {
          console.log("Safari autoplay hatası:", error);
        });
      }
    }
  }, []);

  return (
    <header id="homeHeader" style={{ backgroundImage: `url(${Video})` }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        src={Video}
      />
      <div className="normalBox">
        <h1>{t("BstIt")}</h1>
        <h2>{t("TogetherWith")}</h2>
        <Link
          to={"https://partnerfinder.sap.com/profile/0002850313"}
          target="_blank"
          className="exploreBtn"
        >
          <span>{t("Explore")}</span>
          <div className="arrow">
            <IoIosArrowRoundForward />
          </div>
        </Link>
        <img src={SAP} alt="" />
      </div>
    </header>
  );
}

export default Header;


{/* <h1>Under Construction...</h1>
            <h5>+994 55 343 21 43</h5>
            <h5>info@pmsystems.az</h5>
            <h5>46 Ashiq Molla Juma, Baku</h5> */}