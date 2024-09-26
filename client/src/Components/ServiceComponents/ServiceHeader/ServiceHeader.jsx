import React, { useEffect, useRef } from 'react';
import Image from '../../../Image/ServiceHeader.png';
import './ServiceHeader.scss';
import { useTranslation } from 'react-i18next';
import Video from '../../../Video/Video2.webm';
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
      video.loop = true; // Videonun tekrar etmesi için loop ekliyoruz

      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log("Autoplay hatası:", error);
        }
      };

      // Tüm tarayıcılarda videoyu oynatmaya çalışıyoruz
      playVideo();

      // Safari için ek kontrol
      if (browser.name === "Safari") {
        video.addEventListener('ended', () => {
          video.play().catch((error) => {
            console.log("Safari autoplay hatası:", error);
          });
        });
      }
    }
  }, []);

  return (
    <header id='serviceHeader'>
      <video ref={videoRef} autoPlay
        muted
        loop
        playsInline src={Video} />
      <div className="normalBox">
        <h1>{t("OurServiceHead")}</h1>
        <h2>{t("ServiceHeadText")}</h2>
      </div>
    </header>
  );
}

export default ServiceHeader;
