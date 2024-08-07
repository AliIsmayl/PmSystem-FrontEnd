import React, { useState } from 'react';
import './SubscribeBox.scss';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function SubscribeBox() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        // Email validasyonunu burada yapıyoruz
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            toast.error(`${t("MessageFalse")}`);
            return;
        }
        if (!emailRegex.test(email)) {
            toast.error(`${t("SubscripeNotEmail")}`);
            return;
        }

        setIsSending(true);

        const serviceId = "service_2cp0xmn";
        const templateId = "template_bui21b8";
        const publicKey = "FUls4Y1eg7htMlhlv";

        const templateParams = {
            from_email: email,
            to_name: "Project Management System",
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setEmail('');
                setIsSending(false);
                toast.success(`${t("SubscribeMessage")}`);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setIsSending(false);
            });
    }

    return (
        <div className='subscribe'>
            <div className="text">
                <span>{t("SubscribeHead")}</span>
                <p>{t("SubscribeText")}</p>
            </div>
            <form onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    placeholder={`${t("EnterEmail")}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit'>
                    {isSending ? <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" /> : t("Subscribe")}
                </button>
            </form>
        </div>
    )
}

export default SubscribeBox;
