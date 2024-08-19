import React, { useState } from 'react';
import './SubscribeBox.scss';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

function SubscribeBox() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            toast.error(t("MessageFalse"));
            return;
        }
        if (!emailRegex.test(email)) {
            toast.error(t("SubscripeNotEmail"));
            return;
        }

        setIsSending(true);

        fetch('https://pmsystems.az/qrcode/api/subscribe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ email }),
        })
            .then(response => {
                if (response.ok) {
                    setEmail('');
                    toast.success(t("SubscribeMessage"));
                } else {
                    response.json().then(data => {
                        toast.error(data.error || t("SubscripeError"));
                    });
                }
                setIsSending(false);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                toast.error(t("SubscripeError"));
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
                    placeholder={t("EnterEmail")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit'>
                    {isSending ? <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" /> : t("Subscribe")}
                </button>
            </form>
        </div>
    );
}

export default SubscribeBox;