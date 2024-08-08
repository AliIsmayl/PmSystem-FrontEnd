import React, { useState } from 'react';
import './Faq.scss';
import Background from '../../../Image/Background2.png';
import { IoIosArrowForward } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
    const { t } = useTranslation();

    function handleOpen(index) {
        setOpenIndex(openIndex === index ? null : index);
    }

    const faqData = [
        { question: `${t("faqQuestion1")}`, answer: `${t("faqAnswer1")}` },
        {
            question: `${t("faqQuestion2")}`, answer: [
                {
                    headAnswer: `${t("faqAns1Hd1")}`,
                    textAnswer: `${t("faqAns1Txt1")}`
                },
                {
                    headAnswer: `${t("faqAns1Hd2")}`,
                    textAnswer: `${t("faqAns1Txt2")}`
                },
                {
                    headAnswer: `${t("faqAns1Hd3")}`,
                    textAnswer: `${t("faqAns1Txt3")}`
                },
                {
                    headAnswer: `${t("faqAns1Hd4")}`,
                    textAnswer: `${t("faqAns1Txt4")}`
                },
                {
                    headAnswer: `${t("faqAns1Hd5")}`,
                    textAnswer: `${t("faqAns1Txt5")}`
                },
                {
                    headAnswer: `${t("faqAns1Hd6")}`,
                    textAnswer: `${t("faqAns1Txt6")}`
                },
            ]
        },
        {
            question: `${t("faqQuestion3")}`, answer: [
                {
                    headAnswer: `${t("faqAns2Hd1")}`,
                    textAnswer: `${t("faqAns2Txt1")}`
                },
                {
                    headAnswer: `${t("faqAns2Hd2")}`,
                    textAnswer: `${t("faqAns2Txt2")}`
                },
                {
                    headAnswer: `${t("faqAns2Hd3")}`,
                    textAnswer: `${t("faqAns2Txt3")}`
                },
                {
                    headAnswer: `${t("faqAns2Hd4")}`,
                    textAnswer: `${t("faqAns2Txt4")}`
                }
            ]
        },
        {
            question: `${t("faqQuestion4")}`, answer: [
                {
                    headAnswer: `${t("faqAns3Hd1")}`,
                    textAnswer: `${t("faqAns3Txt1")}`
                },
                {
                    headAnswer: `${t("faqAns3Hd2")}`,
                    textAnswer: `${t("faqAns3Txt2")}`
                },
                {
                    headAnswer: `${t("faqAns3Hd3")}`,
                    textAnswer: `${t("faqAns3Txt3")}`
                }
            ]
        },
        {
            question: `${t("faqQuestion5")}`, answer: [
                {
                    headAnswer: `${t("faqAns4Hd1")}`,
                    textAnswer: `${t("faqAns4Txt1")}`
                },
                {
                    headAnswer: `${t("faqAns4Hd2")}`,
                    textAnswer: `${t("faqAns4Txt2")}`
                },
                {
                    headAnswer: `${t("faqAns4Hd3")}`,
                    textAnswer: `${t("faqAns4Txt3")}`
                },
                {
                    headAnswer: `${t("faqAns4Hd4")}`,
                    textAnswer: `${t("faqAns4Txt4")}`
                },
                {
                    headAnswer: `${t("faqAns4Hd5")}`,
                    textAnswer: `${t("faqAns4Txt5")}`
                },
                {
                    headAnswer: `${t("faqAns4Hd6")}`,
                    textAnswer: `${t("faqAns4Txt6")}`
                },
            ]
        },

    ];

    return (
        <section id='faq' style={{ backgroundImage: `url(${Background})` }}>
            <div className="leftBox">
                <h1 data-aos="fade-right" data-aos-duration="1000">{t("GotAnyGuestion")}</h1>
                <Link to={"/about"} className="viewAllBtn">
                    <p>{t("Explore")}</p>
                    <div className="arrow">
                        <span></span>
                        <div className="arrowHead">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="rightBox">
                <div className="faqBox">
                    {faqData.map((faq, index) => (
                        <div className="oneBox" data-aos="fade-down" data-aos-duration="1000" key={index}>
                            <div className="minusPlusBox" onClick={() => handleOpen(index)}>
                                {openIndex === index ? <LuMinus /> : <FiPlus />}
                            </div>
                            <div className="headBox" onClick={() => handleOpen(index)}>
                                <p>{faq.question}</p>
                            </div>
                            <div className={`textBox ${openIndex === index ? "opened" : ""}`}>
                                {Array.isArray(faq.answer) ? (
                                    <ul>
                                        {faq.answer.map((ans, i) => (
                                            <li key={i}>
                                                <strong>{ans.headAnswer} :</strong> {ans.textAnswer}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{faq.answer}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
