import React, { useEffect, useRef } from 'react';
import './CareerHeader.scss';
import Image from '../../../Image/AboutHeader.png';
import { useTranslation } from 'react-i18next';
import Video from '../../../Video/Video3.mp4';
import UAParser from 'ua-parser-js';

function CareerHeader() {
  const { t } = useTranslation();
  const videoRef = useRef(null); // Video elementine referans

  useEffect(() => {
    const parser = new UAParser();
    const browser = parser.getBrowser();
    const video = videoRef.current;

    if (video) {
      video.muted = true; // Tüm tarayıcılarda otomatik oynatma için videoyu sessize alıyoruz
      video.loop = true; // Videonun tekrar tekrar oynatılması için loop ekliyoruz

      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log("Autoplay hatası:", error);
        }
      };

      // Tüm tarayıcılarda videoyu oynatmaya çalışıyoruz
      playVideo();

      // Eğer Safari ise ek bir kontrol ekliyoruz
      if (browser.name === "Safari") {
        // Video tekrar oynatılıyor
        video.addEventListener('ended', () => {
          video.play().catch((error) => {
            console.log("Safari autoplay hatası:", error);
          });
        });
      }
    }
  }, []);

  return (
    <header id='careerHeader'>
      <video ref={videoRef} autoPlay
        muted
        loop
        playsInline src={Video} /> {/* Video otomatik oynatma ve loop */}
      <div className="normalBox">
        <h1>{t("CareerHead")}</h1>
        <h2>{t("CareerLittle")}</h2>
      </div>
    </header>
  );
}

export default CareerHeader;
