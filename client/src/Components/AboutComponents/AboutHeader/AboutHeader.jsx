import React, { useEffect, useRef } from 'react';
import './AboutHeader.scss';
import Image from '../../../Image/AboutHeader.png';
import { useTranslation } from 'react-i18next';
import Video from '../../../Video/Video1.mp4';
import UAParser from 'ua-parser-js';

function AboutHeader() {
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
    <header id='aboutHeader'>
      <video ref={videoRef} autoPlay muted loop src={Video} />

      <div className="normalBox">
        <h1>{t("AboutUS")}</h1>
        <h2>{t("AboutHeadText")}</h2>
      </div>
    </header>
  );
}

export default AboutHeader;
