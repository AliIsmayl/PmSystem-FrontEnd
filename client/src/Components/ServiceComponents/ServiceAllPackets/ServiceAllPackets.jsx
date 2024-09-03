import React, { useEffect, useState } from "react";
import "./ServiceAllPackets.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from "axios";
import i18next from "i18next";
import { Link } from "react-router-dom";

function ServiceAllPackets() {
  const [service, setService] = useState([]);
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
      getData(); // Fetch data again if the language changes
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <section id="serviceAllPackets">
      {service.length > 0 ? (
        service
          .sort((a, b) => a.order - b.order) // Sort the service array by order
          .map((item, index) => {
            const currentItem = item[languageKey] || item["EN"];
            const isLastOddItem =
              index === service.length - 1 && service.length % 2 !== 0;

            if (index % 2 === 0) {
              const nextItem = service[index + 1];
              const nextItemData = nextItem
                ? nextItem[languageKey] || nextItem["EN"]
                : null;

              return (
                <div
                //   to={`${item.id}`}
                  key={index}
                  className="upBox"
                  data-aos={index % 4 === 0 ? "fade-left" : "fade-right"}
                  data-aos-duration="1000"
                >
                  <Link
                  to={`${item.id}`}
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
                  {nextItemData && (
                    <Link
                    to={`${item.id+1}`}
                      id="cardSmall"
                      style={{ width: index % 4 === 0 ? "40%" : "55%" }}
                      className="cardHover"
                    >
                      <div className="arrowBox">
                        <IoIosArrowRoundForward />
                      </div>
                      <h1>{nextItemData.LargeHeadName}</h1>
                      <p>{nextItemData.LittleTextInfo}</p>
                    </Link>
                  )}
                </div>
              );
            }

            if (isLastOddItem) {
              return (
                <div
                  key={index}
                  className="upBox"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div
                    id="cardBig"
                    style={{ width: "100%" }}
                    className="cardHover"
                  >
                    <div  className="arrowBox">
                      <IoIosArrowRoundForward />
                    </div>
                    <h1 style={{ maxWidth: "70%" }}>
                      {currentItem.LargeHeadName}
                    </h1>
                    <p>{currentItem.LittleTextInfo}</p>
                  </div>
                </div>
              );
            }

            return null;
          })
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default ServiceAllPackets;
