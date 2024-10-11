import React, { useEffect, useState } from "react";
import "./CurentlySection.scss";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";

function CurentlySection() {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState([]);
  const [vacancy, setVacancy] = useState([]);

  async function getCategory() {
    const res = await axios.get(
      "https://pmsystems.az/qrcode/api/v1/categories/"
    );
    setCategory(res.data);
  }
  async function getVacancy() {
    const res = await axios.get("https://pmsystems.az/qrcode/api/v1/jobs/");
    setVacancy(res.data);
  }

  useEffect(() => {
    getCategory();
    getVacancy();
  }, []);

  return (
    <section id="curentlySection">
      <div className="upBox">
        <h2>{t("CurentlyText")}</h2>
      </div>
      <div className="downBox">
        <div className="filterBox">
          <ul>
            <li>{t("AllPosition")} (10)</li>
            {category.map((item) => (
              <li key={item.id}>
                {item[i18n.language.toUpperCase()].Category}
              </li>
            ))}
          </ul>
          <p>{t("CurentlyDesc")}</p>
          <div className="shareCvBtn">
            <Link className="link" to={"/sendCv"}>
              {t("ShareCv")}
            </Link>
          </div>
        </div>
        <div className="vacancyBox">
          {vacancy.map((item) => (
            <div className="vacancyCard" key={item.id}>
              <p>{item[i18n.language.toUpperCase()].Position}</p>
              <div className="btnsBox">
                <div className="btn">
                  {item[i18n.language.toUpperCase()].Category}
                </div>
                <div className="btn">
                  {item[i18n.language.toUpperCase()].JobType}
                </div>
              </div>

              <div className="endBox">
                <p>{item[i18n.language.toUpperCase()].Description}</p>
                <Link className="viewBtn" to={`${item.id}`}>
                  <span>{t("ViewPos")}</span>
                  <div className="icon">
                    <IoIosArrowRoundForward />
                  </div>
                </Link>
              </div>
            </div>
          ))}
          {/* <li key={item.id}>{item[i18n.language.toUpperCase()].Position}</li> */}

          <div className="vacancyCard">
            <p>Full-Stack Developer </p>
            <div className="btnsBox">
              <div className="btn">Engineering</div>
              <div className="btn">Full-time</div>
            </div>
            <div className="endBox">
              <p>
                Due to growing workload, we are looking for experienced and
                talented Full-Stack Developers to join our fast-paced
                Engineering team. You will work closely with Product, Design and
                Marketing to analyze, develop, debug, test, roll-out and support
                new and existing product features.
              </p>
              <Link className="viewBtn" to={"/yoxlama"}>
                <span>{t("ViewPos")}</span>
                <div className="icon">
                  <IoIosArrowRoundForward />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurentlySection;
