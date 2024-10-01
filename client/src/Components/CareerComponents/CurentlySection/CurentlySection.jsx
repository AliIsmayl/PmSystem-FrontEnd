import React from 'react'
import './CurentlySection.scss'
import { useTranslation } from 'react-i18next';
import { IoIosArrowRoundForward } from "react-icons/io";

function CurentlySection() {
    const { t } = useTranslation();

    return (
        <section id='curentlySection' >
            <div className="upBox">
                <h2>{t("CurentlyText")}</h2>
            </div>
            <div className="downBox">
                <div className="filterBox">
                    <ul>
                        <li>{t("AllPosition")} (10)</li>
                        <li>misal (3)</li>
                        <li>misal (2)</li>
                        <li>misal (4)</li>
                        <li>misal (1)</li>
                    </ul>
                    <p>{t("CurentlyDesc")}</p>

                    <div className="shareCvBtn">{t("ShareCv")}</div>
                </div>
                <div className="vacancyBox">
                    <div className="vacancyCard">
                        <p>Full-Stack Developer </p>
                        <div className="btnsBox">
                            <div className="btn">Enginering</div>
                            <div className="btn"> Full-time</div>
                        </div>
                        <div className="endBox">
                            <p>Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.</p>
                            <div className="viewBtn">
                                <span>{t("ViewPos")}</span>
                                <div className="icon">
                                <IoIosArrowRoundForward />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vacancyCard">
                        <p>Full-Stack Developer </p>
                        <div className="btnsBox">
                            <div className="btn">Enginering</div>
                            <div className="btn"> Full-time</div>
                        </div>
                        <div className="endBox">
                            <p>Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.</p>
                            <div className="viewBtn">
                                <span>{t("ViewPos")}</span>
                                <div className="icon">
                                <IoIosArrowRoundForward />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vacancyCard">
                        <p>Full-Stack Developer </p>
                        <div className="btnsBox">
                            <div className="btn">Enginering</div>
                            <div className="btn"> Full-time</div>
                        </div>
                        <div className="endBox">
                            <p>Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.</p>
                            <div className="viewBtn">
                                <span>{t("ViewPos")}</span>
                                <div className="icon">
                                <IoIosArrowRoundForward />
                                </div>
                            </div>
                        </div>
                    </div>
                   
              
                </div>
            </div>
        </section>
    )
}

export default CurentlySection