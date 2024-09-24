import React from 'react';
import Image from '../../../Image/ServiceHeader.png';
import './ServiceHeader.scss';
import { useTranslation } from 'react-i18next';
import Video from '../../../Video/Video2.mp4'

function ServiceHeader() {
  const { t } = useTranslation();

  return (
    <header id='serviceHeader' >
      <video autoPlay muted loop src={Video} />
      <div className="normalBox">
        <h1>{t("OurServiceHead")}</h1>
        <h2>{t("ServiceHeadText")}</h2>
      </div>


    </header>
  )
}

export default ServiceHeader