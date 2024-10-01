import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { RxUpload } from "react-icons/rx";
import { Link } from "react-router-dom";
import CardBackİmage from "../../Image/ApplyJobCardBack.png";
import BackImage from "../../Image/CareerDetailBack.webp";
import "./SendCvPage.scss";

function SendCvPage() {
  const { t } = useTranslation();
  return (
    <div id="sendCvPage" style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="oneBox">
        <Link className="touchLink" to={"/career"}>
          {t("Career")}
        </Link>
        {/* <div className="icon">
          <IoIosArrowForward />
        </div>
        <Link className="link2" to={"/yoxlama"}>
          Full Stack Developer
        </Link> */}
        <div className="icon">
          <IoIosArrowForward />
        </div>
        <Link className="link">{t("Apply")}</Link>
      </div>
      <div className="downBox">
        <div className="leftBox" style={{ backgroundImage: `url(${CardBackİmage})` }}>
          {/* <h1>Full Stack Developer</h1>
          <div className="normalBox">
            <p>Baku,Azerbaijan</p>|<p>Full Time</p>
          </div> */}
        </div>
        <div className="rightBox">
          <form action="">
            <label htmlFor="">{t("Name")}</label>
            <input type="text" />
            <label htmlFor="">{t("Surname")}</label>
            <input type="text" />
            <label htmlFor="">{t("Email")}</label>
            <input type="text" />
            <label htmlFor="">{t("PhoneNumber")}</label>
            <input type="text" />
            <label htmlFor="">{t("Message")}</label>
            <textarea type="text" />
            <div className="imageBox">
              <div className="frontBox">
                <div className="icon">
                  <RxUpload />
                </div>
                <p> {t("UploadFile")}</p>
              </div>
              <input type="file" className="fileInput" />
            </div>
            <p>{t("UploadFileSize")}</p>
            <div className="sendBtn">{t("Send")}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SendCvPage;
