import React, { useEffect, useState, useRef } from 'react';
import './NextLevel.scss';
import { Link } from 'react-router-dom';
import sap1 from '../../../Image/sap1.png'
import sap2 from '../../../Image/sap2.png'
import sap3 from '../../../Image/sap3.png'
import sap4 from '../../../Image/sap4.png'
import { useTranslation } from 'react-i18next';

function NextLevel() {
  const { t } = useTranslation();
  const [projectsCount, setProjectsCount] = useState(300);
  const [loremCount, setLoremCount] = useState(50);
  const [clientsCount, setClientsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const projectsTarget = 500;
      const loremTarget = 120;
      const clientsTarget = 98;

      const incrementValue = (setFunction, target, duration) => {
        let startValue = 0;
        const increment = target / (duration / 10);
        const interval = setInterval(() => {
          startValue += increment;
          if (startValue >= target) {
            setFunction(target);
            clearInterval(interval);
          } else {
            setFunction(Math.round(startValue));
          }
        }, 10);
      };

      incrementValue(setProjectsCount, projectsTarget, 2000);
      incrementValue(setLoremCount, loremTarget, 2000);
      incrementValue(setClientsCount, clientsTarget, 2000);
    }
  }, [isVisible]);

  return (
    <section id='nextLevel' ref={sectionRef}>
      <div className="upBox">
        <h1 data-aos="fade-right" data-aos-duration="1000">{t("ReadyTo")}</h1>
        <h5 data-aos="fade-right" data-aos-duration="1000">{t("NextLevel")}</h5>
        <div className="normalBox">
          <div className="counBox" style={{ width: "130px" }}>
            <p>{projectsCount}+</p>
            <h6> {t("AllProjects")} </h6>
          </div>
          <span></span>
          <div className="counBox">
            <p>{loremCount}+</p>
            <h6>{t("GeneralService")}</h6>
          </div>
          <span></span>
          <div className="counBox">
            <p>{clientsCount}%</p>
            <h6>{t("SatisfiedClients")}</h6>
          </div>
        </div>
      </div>
      <div className="downBox">
        <Link className='link'>
          <img src={sap1} alt="" />
        </Link>
        <Link className='link'>
          <img src={sap2} alt="" />
        </Link>
        <Link className='link'>
          <img src={sap3} alt="" />
        </Link>
        <Link className='link'>
          <img src={sap4} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default NextLevel;
