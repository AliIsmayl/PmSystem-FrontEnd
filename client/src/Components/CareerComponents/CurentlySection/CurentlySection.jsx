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
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track the selected category

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

  // Filter vacancies based on selected category
  const filteredVacancies = selectedCategory
    ? vacancy.filter(
      (item) =>
        item[i18n.language.toUpperCase()].Category === selectedCategory
    )
    : vacancy;

  return (
    <section id="curentlySection">
      <div className="upBox">
        <h2>{t("CurentlyText")}</h2>
      </div>
      <div className="downBox">
        <div className="filterBox">
          <ul>
            <li
              onClick={() => setSelectedCategory(null)}
              className={!selectedCategory ? "active" : ""}
            >
              {t("AllPosition")} ({vacancy.length})
            </li>
            {category.map((item) => (
              <li
                key={item.id}
                onClick={() =>
                  setSelectedCategory(item[i18n.language.toUpperCase()].Category)
                }
                className={
                  selectedCategory === item[i18n.language.toUpperCase()].Category
                    ? "active"
                    : ""
                }
              >
                {item[i18n.language.toUpperCase()].Category}
              </li>
            ))}
          </ul>

          <p>{t("CurentlyDesc")}</p>
          <Link className="shareCvBtn" to={"/sendCv"}>
            <p>{t("ShareCv")}</p>
          </Link>
        </div>
        <div className="vacancyBox">
          {
            filteredVacancies.length > 0 ?
              (filteredVacancies.map((item) => (
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
                </div>)))
              : (<div className="vacancyCard"></div>)}
        </div>
      </div>
    </section>
  );
}

export default CurentlySection;
