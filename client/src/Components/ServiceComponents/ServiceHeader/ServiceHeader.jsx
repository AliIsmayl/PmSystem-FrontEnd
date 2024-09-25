import React, { useEffect, useRef } from 'react';
import Image from '../../../Image/ServiceHeader.png';
import './ServiceHeader.scss';
import { useTranslation } from 'react-i18next';
import Video from '../../../Video/Video2.mp4';
import UAParser from 'ua-parser-js';

function ServiceHeader() {
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
    <header id='serviceHeader'>
      <video ref={videoRef} autoPlay muted loop src={Video} />
      <div className="normalBox">
        <h1>{t("OurServiceHead")}</h1>
        <h2>{t("ServiceHeadText")}</h2>
      </div>
    </header>
  );
}

export default ServiceHeader;
