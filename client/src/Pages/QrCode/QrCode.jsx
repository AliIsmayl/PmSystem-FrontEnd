import React, { useEffect, useState } from "react";
import "./QrCode.scss";
import Logo from "../../Image/whiteLogo.png";
import { Link, useParams } from "react-router-dom";
import Background from "../../Image/qrCodeBack.png";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loading";

function QrCode() {
  const [qrCode, setQrCode] = useState([null]);
  const { name } = useParams();
  const { t } = useTranslation(); 

  async function getData() {
    try {
      const res = await axios.get(
        `https://pmsystems.az/qrcode/list/all/${name}/`
      );
      // console.log("dataaaaaa", res.data);
      setQrCode(res.data);
    } catch (error) {
      // console.log("qrCodeError", error);
    }
  }

  useEffect(() => {
    getData();
  }, [name]);

  return (
    <section id="qrCode">
      <img src={Logo} alt="Logo" />
      <h3>{qrCode.fullname}</h3>
      {qrCode.name ? (
        <>
          {qrCode ? (
            <div>
              <Link className="link" to={`mailto:${qrCode.email}`}>
                E-mail
              </Link>
            </div>
          ) : (
            <p>Loading...</p>
          )}

          <Link
            className="link"
            to={"https://www.linkedin.com/company/pmsystems/"}
          >
            Linkedin
          </Link>
          <Link className="link" to={"https://pmsystems.az/"}>
            Website
          </Link>
        </>
      ) : (
        <p>{t("NotPersonal")}</p>
      )}
    </section>
  );
}

export default QrCode;
