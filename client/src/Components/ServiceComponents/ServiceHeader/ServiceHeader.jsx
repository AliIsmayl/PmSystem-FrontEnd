import React from 'react';
import Image from '../../../Image/ServiceHeader.png';
import './ServiceHeader.scss';
import { useTranslation } from 'react-i18next';

function ServiceHeader() {
  const { t } = useTranslation();

  return (
    <header id='serviceHeader' style={{ backgroundImage: `url(${Image})` }}>
      <p>{t("OurServiceHead")}</p>
      <span>{t("ServiceHeadText")}</span>

    </header>
  )
}

export default ServiceHeader