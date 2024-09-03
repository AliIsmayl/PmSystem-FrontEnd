import React from 'react';
import Image from '../../../Image/ServiceHeader.png';
import './ServiceHeader.scss';
import { useTranslation } from 'react-i18next';

function ServiceHeader() {
  const { t } = useTranslation();

  return (
    <header id='serviceHeader' style={{ backgroundImage: `url(${Image})` }}>
      <h1>{t("OurServiceHead")}</h1>
      <h2>{t("ServiceHeadText")}</h2>

    </header>
  )
}

export default ServiceHeader