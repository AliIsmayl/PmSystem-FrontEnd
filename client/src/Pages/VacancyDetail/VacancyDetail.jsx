import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./VacancyDetail.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Back from "../../Image/CareerBack.png";
import BackImage from "../../Image/CareerDetailBack.webp";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiMailFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";

function VacancyDetail() {
  const { t } = useTranslation();
  return (
    <div id="vacancyDetail" style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="oneBox">
        <Link className="touchLink" to={"/career"}>{t("Career")}</Link>
        <div className="icon">
          <IoIosArrowForward />
        </div>
        <Link className="link">Full Stack Developer</Link>
      </div>
      <div className="twoBox" style={{ backgroundImage: `url(${Back})` }}>
        <h1>Full Stack Developer</h1>
        <Link className="applyBtn" to={"/app"} >
          {t("ApplyJob")}
          <div className="icon">
            <IoIosArrowRoundForward />
          </div>
        </Link>
      </div>
      <div className="threeBox">
        <p>Baku,Azerbaijan</p>| <p>Full Time</p>
      </div>
      <div className="fourBox">
        <h2>Overview</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          temporibus ex reiciendis. Fugiat neque pariatur necessitatibus,
          suscipit facere molestias accusantium minus amet quod? Autem labore
          iste tenetur cupiditate quisquam quam possimus ut veniam maiores
          facere facilis enim exercitationem eligendi eum pariatur deserunt,
          adipisci iure totam ex molestias blanditiis voluptas qui minus.
          Deserunt, sunt magni. Dolores, cupiditate minima quod rerum laborum,
          ut ea sit odit incidunt nobis fugiat? Fugiat nostrum nulla laboriosam,
          ea obcaecati provident eveniet ullam id, eum corrupti minus quas
          omnis, illo ad vitae placeat mollitia odit voluptate? Quibusdam, iste!
          Ipsa earum fugit consequatur sequi omnis excepturi placeat vitae?
        </p>
        <h2>Responsibilities</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            eos.
          </li>
          <li>
            Voluptatem ullam alias voluptatibus expedita id accusantium facilis
            quia natus?
          </li>
          <li>
            Architecto quidem assumenda provident quia quis. Unde ipsa iure
            rerum?
          </li>
          <li>
            Quisquam saepe repudiandae enim maiores in at eligendi, tenetur
            blanditiis!
          </li>
          <li>
            Consequatur laborum magni, repellat quia odio veniam beatae corporis
            nulla?
          </li>
          <li>
            Similique omnis a dolore reprehenderit deserunt officiis
            necessitatibus iusto sequi!
          </li>
          <li>
            Maxime, magnam! Nostrum qui a autem vel commodi. Expedita, aut?
          </li>
        </ul>
        <h2>Qualifications</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            eos.
          </li>
          <li>
            Voluptatem ullam alias voluptatibus expedita id accusantium facilis
            quia natus?
          </li>
          <li>
            Architecto quidem assumenda provident quia quis. Unde ipsa iure
            rerum?
          </li>
          <li>
            Quisquam saepe repudiandae enim maiores in at eligendi, tenetur
            blanditiis!
          </li>
          <li>
            Consequatur laborum magni, repellat quia odio veniam beatae corporis
            nulla?
          </li>
          <li>
            Similique omnis a dolore reprehenderit deserunt officiis
            necessitatibus iusto sequi!
          </li>
          <li>
            Maxime, magnam! Nostrum qui a autem vel commodi. Expedita, aut?
          </li>
        </ul>
      </div>
      <div className="fiveBox">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6077.964861394975!2d49.818614!3d40.387082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087a9f8397a0b%3A0xf214b7c81735e508!2sPM%20Systems%20LLC%20-%20Project%20Management%20Systems!5e0!3m2!1saz!2saz!4v1727779664575!5m2!1saz!2saz"
        
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contactBox">
          <div className="normalBox">
            <div className="icon"><PiPhoneCallFill /></div>
            <span>+994 55 343 21 43</span>
          </div>
          <div className="normalBox">
            <div className="icon"><RiMailFill /></div>
            <span>info@pmsystems.az</span>
          </div>
          <div className="normalBox">
            <div className="icon"><HiLocationMarker /></div>
            <span>46 Ashiq Molla Juma, Baku</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancyDetail;
