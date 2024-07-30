import React, { useState } from 'react';
import './Faq.scss';
import Background from '../../../Image/Background2.png';
import { IoIosArrowForward } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    function handleOpen(index) {
        setOpenIndex(openIndex === index ? null : index);
    }

    const faqData = [
        { question: "What is Webflow and why is it the best website builder?", answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." },
        { question: "What is Webflow and why is it the best website builder?", answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." },
        { question: "What is Webflow and why is it the best website builder?", answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." },
        { question: "What is Webflow and why is it the best website builder?", answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." },
        { question: "What is Webflow and why is it the best website builder?", answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere." },
    ];

    return (
        <section id='faq' style={{ backgroundImage: `url(${Background})` }}>
            <div className="leftBox">
                <h1 data-aos="fade-right" data-aos-duration="1000">Got any question?</h1>
                <div className="viewAllBtn">
                    <p>Explore</p>
                    <div className="arrow">
                        <span></span>
                        <div className="arrowHead">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
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
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
