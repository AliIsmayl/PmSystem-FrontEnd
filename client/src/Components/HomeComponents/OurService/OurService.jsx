import React, { useEffect, useState } from "react";
import "./OurService.scss";
import BackroundImage from "../../../Image/Background.png";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";
import i18next from "i18next";

function OurService() {
  const [service, setService] = useState([]);
  const { t } = useTranslation();
  const languageKey = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : "EN";

  async function getData() {
    try {
      const res = await axios.get(
        "https://pmsystems.az/qrcode/service_details/"
      );
      setService(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();

    const handleLanguageChange = (lng) => {
      getData(); // Dil değiştiğinde verileri tekrar yükle
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <section
      id="ourService"
      style={{ backgroundImage: `url(${BackroundImage})` }}
    >
      <div className="leftBox">
        <h1>{t("OurService")}</h1>
        <Link to="/service" className="viewHiddenBtn">
          <p>{t("ViewAll")}</p>
        </Link>
        <p>{t("OurServiceAnswer")}</p>
        <Link to="/service" className="viewAllBtn">
          <p>{t("ViewAll")}</p>
          <div className="arrow">
            <span></span>
            <div className="arrowHead">
              <IoIosArrowForward />
            </div>
          </div>
        </Link>
      </div>
      <div className="rightBox">
        {service.length > 0 ? (
          service.slice(0, 6).map((item, index) => {
            const currentItem = item[languageKey] || item["EN"];
            const nextItem = service[index + 1];
            const nextItemData = nextItem
              ? nextItem[languageKey] || nextItem["EN"]
              : null;

            if (index % 2 === 0 && nextItemData) {
              return (
                <div
                  key={index}
                  className="upBox"
                  data-aos={index % 4 === 0 ? "fade-left" : "fade-right"}
                  data-aos-duration="1000"
                >
                  {/* <Link
                    to={`service/${item.id}`}
                    key={index}
                    className="linkContainer" // Add any class needed for styling
                  >
                    1 */}
                  <Link
                    to={`service/${item.id}`}
                    id="cardBig"
                    style={{ width: index % 4 === 0 ? "58%" : "43%" }}
                    className="cardHover"
                  >
                    <div className="arrowBox">
                      <IoIosArrowRoundForward />
                    </div>
                    <h1 style={{ maxWidth: "70%" }}>
                      {currentItem.LargeHeadName}
                    </h1>
                    <p>{currentItem.LittleTextInfo}</p>
                  </Link>
                  {/* </Link> */}
                  {/* 
                  <Link
                    to={`service/${item.id + 1}`}
                    className="linkContainer" // Add any class needed for styling
                    style={{ width: index % 4 === 0 ? "40%" : "55%" }}
                  >
                    2 */}
                  <Link
                    to={`service/${item.id + 1}`}
                    id="cardSmall"
                    className="cardHover"
                    style={{ width: index % 4 === 0 ? "40%" : "55%" }}
                  >
                    <div className="arrowBox">
                      <IoIosArrowRoundForward />
                    </div>
                    <h1>{nextItemData.LargeHeadName}</h1>
                    <p>{nextItemData.LittleTextInfo}</p>
                  </Link>
                  {/* </Link> */}
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}

export default OurService;
