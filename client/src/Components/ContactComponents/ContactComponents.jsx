import React, { useEffect, useState } from 'react';
import './ContactComponents.scss';
import { PiPhoneCall } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import image from '../../Image/ContactHeader.png';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import axios from 'axios'

function ContactComponents() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [serviceMessage, setServiceMessage] = useState('');
    const [postion, setPostion] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [isSending, setIsSending] = useState(false);
    const { t } = useTranslation();
    const [changeForm, setChangeForm] = useState(false)
    const [service, setService] = useState([]);
    const [language, setLanguage] = useState(i18next.language);

    async function getData() {
        try {
            const res = await axios.get('https://pmsystems.az/qrcode/service_details/');
            setService(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    function handleChangeIpnut() {
        setChangeForm(!changeForm)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error(`${t("MessageFalse")}`);
            return;
        }

        setIsSending(true);

        const serviceId = "service_2cp0xmn";
        const templateId = "template_bz00sv7";
        const publicKey = "FUls4Y1eg7htMlhlv";

        const templateParams = {
            from_name: name,
            from_email: email, 
            to_name: "Project Management System", 
            message: message, 
        };


        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setEmail('');
                setMessage('');
                setName('');
                setIsSending(false);
                toast.success(`${t("MessageTrue")}`);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setIsSending(false);
            });
    }
    function handleSubmitBusinness(e) {
        e.preventDefault();

        if (!name || !email || !message || !companyName || !serviceMessage || !postion) {
            toast.error(`${t("MessageFalse")}`);
            return;
        }

        setIsSending(true);

        const serviceId = "service_2cp0xmn";
        const templateId = "template_bui21b8";
        const publicKey = "FUls4Y1eg7htMlhlv";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Project Management System",
            message: message,
            from_service: serviceMessage,
            from_company: companyName,
            from_position: postion,
        };


        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setEmail('');
                setMessage('');
                setName('');
                setCompanyName('');
                setPostion('');
                setServiceMessage('');
                setIsSending(false);
                toast.success(`${t("MessageTrue")}`);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setIsSending(false);
            });
    }

    useEffect(() => {
        getData();

        const handleLanguageChange = (lng) => {
            setLanguage(lng);
            getData();
        };

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const languageKey = language.toLocaleUpperCase();
    return (
        <section id='contactComponents' style={{ backgroundImage: `url(${image})` }}>
            <div className="containerContactBox">
                <h1 data-aos="fade-right" data-aos-duration="1000">{t("ContactUs")}</h1>
                <div className="leftBox" data-aos="fade-right" data-aos-duration="1000">
                    <div className="textBox">
                        <PiPhoneCall />
                        <p>+994 55 343 21 43</p>
                    </div>
                    <div className="textBox">
                        <AiOutlineMail />
                        <p>info@pmsystems.az</p>
                    </div>
                    <div className="textBox">
                        <IoLocationSharp />
                        <p>46 Ashiq Molla Juma, Baku</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.0517443662766!2d49.8577419758269!3d40.407704471441065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087a9f8397a0b%3A0xf214b7c81735e508!2sPM%20Systems%20LLC%20-%20Project%20Management%20Systems!5e0!3m2!1saz!2saz!4v1722495576696!5m2!1saz!2saz" frameBorder="0" ></iframe>
                </div>
                <div className="rightBox" data-aos="fade-left" data-aos-duration="1000">
                    <p>{t("ContactText")}</p>
                    <span>{t("ContactText2")}</span>
                    <ul>
                        <li onClick={handleChangeIpnut}><h3>{t("Customer")}</h3><span className={`${changeForm ? "linesss" : ""}`}></span></li>
                        <li onClick={handleChangeIpnut}><h3>{t("Businness")}</h3><span className={`${changeForm ? "" : "linesss"}`}></span></li>
                    </ul>
                    <div className="chanegInputBox">
                        <form onSubmit={handleSubmit} action="" className={`customerForm ${changeForm ? "close" : ""}`}>
                            <div className="smallBoxs">
                                <div className="smallBox">
                                    <label htmlFor="">{t("Name")} , {t("Surname")}</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="smallBox">
                                    <label htmlFor="">{t("Email")}</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="bigBox">
                                <label htmlFor="">{t("Message")}</label>
                                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button type='submit' disabled={isSending}>
                                {isSending ? <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" /> : t("Send")}
                            </button>
                        </form>
                        <form onSubmit={handleSubmitBusinness} action="" className={`businessForm ${changeForm ? "open" : ""}`}>
                            <div className="smallBoxs">
                                <div className="smallBox">
                                    <label htmlFor="">{t("Name")} , {t("Surname")}</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="smallBox">
                                    <label htmlFor="">{t("Email")}</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="smallBoxs">
                                <div className="smallBox">
                                    <label htmlFor="">{t("CompanyName")}</label>
                                    <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                </div>
                                <div className="smallBox" >
                                    <label htmlFor="">{t("Position")}</label>
                                    <input type="text" value={postion} onChange={(e) => setPostion(e.target.value)} />
                                </div>
                            </div>
                            <div className="bigBox">
                                <label htmlFor="">{t("ServiceText")}</label>
                                <select name="" id="" onChange={(e) => setServiceMessage(e.target.value)}>
                                    {service.length > 0 ? (
                                        service.map((item, index) => (
                                            <option key={index} value={item[languageKey].LargeHeadName}>
                                                {item[languageKey].LargeHeadName}
                                            </option>
                                        ))
                                    ) : (
                                        <option>Loading...</option>
                                    )}
                                </select>

                            </div>
                            <div className="bigBox">
                                <label htmlFor="">{t("Message")}</label>
                                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button type='submit' disabled={isSending}>
                                {isSending ? <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" /> : t("Send")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactComponents;




