import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./VacancyDetail.scss";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiMailFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import axios from "axios";
import Back from "../../Image/CareerBack.png";
import BackImage from "../../Image/CareerDetailBack.webp";

function VacancyDetail() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { t } = useTranslation();
  const languageKey = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : "EN";

  useEffect(() => {
    setLoading(true);
    const getDetail = async () => {
      try {
        const res = await axios.get(`https://api.pmsystems.az/qrcode/api/v1/jobs/${id}`);
        console.log("API Response:", res.data);
        setDetail(res.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };

    getDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="loadingBody">
        <div className="loader"></div>
      </div>
    );
  }

  if (!detail || !detail[languageKey]) {
    console.error("Detail or language data missing:", detail, languageKey); // Log detail and languageKey for debugging
    return <div className="error">Error: Unable to load job details.</div>;
  }

  const { Position, LocationCountry, LocationCity, JobType, Overview, Responsibilities, Qualifications } = detail[languageKey];

  return (
    <div id="vacancyDetail" style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="oneBox">
        <Link className="touchLink" to="/career">
          {t("Career")}
        </Link>
        <div className="icon">
          <IoIosArrowForward />
        </div>
        <Link className="link">{Position}</Link>
      </div>
      <div className="twoBox" style={{ backgroundImage: `url(${Back})` }}>
        <h1>{Position}</h1>
        <Link className="applyBtn" to={`/app/${id}`}>
          {t("ApplyJob")}
          <div className="icon">
            <IoIosArrowRoundForward />
          </div>
        </Link>
      </div>
      <div className="threeBox">
        <p>
          {LocationCountry}, {LocationCity}
        </p>
        <p>| {JobType}</p>
      </div>
      <div className="fourBox">
        <h2>Overview</h2>
        <p>{Overview}</p>
        <h2>Responsibilities</h2>
        <ul>
          {Responsibilities?.map((item, index) => (
            <li key={index}>{item[0]}</li>
          ))}
        </ul>
        <h2>Qualifications</h2>
        <ul>
          {Qualifications?.map((item, index) => (
            <li key={index}>{item[0]}</li>
          ))}
        </ul>
      </div>
      <div className="fiveBox">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6077.964861394975!2d49.818614!3d40.387082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087a9f8397a0b%3A0xf214b7c81735e508!2sPM%20Systems%20LLC%20-%20Project%20Management%20Systems!5e0!3m2!1saz!2saz!4v1727779664575!5m2!1saz!2saz"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contactBox">
          <div className="normalBox">
            <div className="icon">
              <PiPhoneCallFill />
            </div>
            <span>+994 55 343 21 43</span>
          </div>
          <div className="normalBox">
            <div className="icon">
              <RiMailFill />
            </div>
            <span>info@pmsystems.az</span>
          </div>
          <div className="normalBox">
            <div className="icon">
              <HiLocationMarker />
            </div>
            <span>46 Ashiq Molla Juma, Baku</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancyDetail;
