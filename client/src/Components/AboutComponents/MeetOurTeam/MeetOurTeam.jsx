import React, { useEffect, useRef, useState } from 'react';
import './MeetOurTeam.scss';
import cardBackground from '../../../Image/BackgroundCard.png';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function MeetOurTeam() {
    const { t } = useTranslation();
    const teamBoxRef = useRef(null);
    const [team, setTeam] = useState([]);
    const [openedCardIndex, setOpenedCardIndex] = useState(null);
    const [showLeftButton, setShowLeftButton] = useState(false);

    async function getData() {
        try {
            const res = await axios.get(`https://pmsystems.az/qrcode/list/all/`);
            setTeam(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function handleOpenCard(index) {
        if (openedCardIndex === index) {
            setOpenedCardIndex(null);
        } else {
            setOpenedCardIndex(index);
        }
    }

    function scrollRight() {
        teamBoxRef.current.scrollLeft += 300; // Sağ tarafa 300px kaydır
        updateButtonVisibility(); // Buton görünürlüğünü kontrol et
    }

    function scrollLeft() {
        teamBoxRef.current.scrollLeft -= 300; // Sol tarafa 300px kaydır
        updateButtonVisibility(); // Buton görünürlüğünü kontrol et
    }

    function updateButtonVisibility() {
        if (teamBoxRef.current.scrollLeft > 0) {
            setShowLeftButton(true);
        } else {
            setShowLeftButton(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const handleWheel = (event) => {
            if (event.deltaY !== 0) {
                teamBoxRef.current.scrollLeft += event.deltaY;
                event.preventDefault();
                updateButtonVisibility(); // Kaydırma sırasında butonları kontrol et
            }
        };

        const teamBox = teamBoxRef.current;
        teamBox.addEventListener('wheel', handleWheel);

        return () => {
            teamBox.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useEffect(() => {
        updateButtonVisibility(); // İlk yüklemede buton görünürlüğünü ayarla
    }, [team]);

    return (
        <section id='meetOurTeam'>
            <h1 data-aos="fade-right" data-aos-duration="1000">{t("MeetOurTeam")}</h1>
            <div className="buttons">
                <button
                    onClick={scrollLeft}
                    className="scrollButton leftButton"
                    style={{ opacity: showLeftButton ? 1 : 0 }}
                >
                    <FaArrowLeft />
                </button>
                <button onClick={scrollRight} className="scrollButton rightButton"><FaArrowRight /></button>
            </div>
            <div className="ourTeamBox" ref={teamBoxRef}>
                {team && team.map((item, index) => (
                    <div
                        className={`card`}
                        onClick={() => handleOpenCard(index)}
                        style={{ backgroundImage: `url(${cardBackground})` }}
                        key={index}
                    >
                        <div className="imgBox">
                            <img src={item.image_url} alt="Team Member" />
                        </div>
                        <div className="textBox">
                            <h5>{item.fullname}</h5>
                            <p>{item.position}</p>
                            <span><Link to={`mailto:${item.email}`} className='link'>{item.email}</Link></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MeetOurTeam;
