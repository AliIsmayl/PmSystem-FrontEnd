import "./ServiceDetail.scss";
import Image from "../../Image/ServiceHeader.png";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import i18next from "i18next";
import Video from "../../Video/Video2.mp4";

function ServiceDetail() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  const [language, setLanguage] = useState(i18next.language);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      setTimeout(async () => {
        const res = await axios.get(
          `https://pmsystems.az/qrcode/service_details/${id}`
        );
        setDetail(res.data);
        setLoading(false);
      }, 10);
    } catch (error) {
      console.error("Error fetching detail data:", error);
    }
  }

  useEffect(() => {
    getData();

    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, [id]);

  // Sayfa her yüklendiğinde en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const languageKey = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : "EN";

  return (
    <section id="serviceDetail">
      {loading ? (
        <div className="loadingBody">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <header id="serviceDetailHeader">
            <video autoPlay muted loop src={Video} />
            <div className="normalBox">
              <div className="goLink">
                <Link className="link" to={"/service"}>
                  {t("Services")}
                </Link>
                <IoIosArrowForward />
                <span>{detail[languageKey]?.name}</span>
              </div>
              <p>{detail[languageKey]?.LargeHeadName}</p>
              <span>{detail[languageKey]?.LittleTextInfo}</span>
            </div>
          </header>
          <main>
            {detail[languageKey]?.DetailHeads?.map((headObj, index) => (
              <div
                className="upBox"
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
                key={index}
              >
                <div
                  className="leftBox"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="1000"
                >
                  <h1>
                    {headObj.heads.map((h, subIndex) => (
                      <span key={subIndex}>{h}</span>
                    ))}
                  </h1>
                  {detail[languageKey]?.DetailTexts[index] && (
                    <>
                      <p>
                        {detail[languageKey].DetailTexts[index].texts.map(
                          (t, textIndex) => (
                            <span key={textIndex}>{t}</span>
                          )
                        )}
                      </p>

                    </>
                  )}
                  {detail[languageKey]?.DetailTexts2[index] && (
                    <>
                      <p style={{ textAlign: "end" }}>
                        {detail[languageKey].DetailTexts2[index].texts_2.map(
                          (t, textIndex) => (
                            <span key={textIndex}>{t}</span>
                          )
                        )}
                      </p>
                    </>
                  )}
                </div>
                {index < detail[languageKey]?.Images?.length && (
                  <div
                    className="rightBox"
                    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                    data-aos-duration="1000"
                  >
                    <img
                      src={detail[languageKey]?.Images[index]}
                      alt={`image ${index + 1}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </main>
        </>
      )}
    </section>
  );
}

export default ServiceDetail;
