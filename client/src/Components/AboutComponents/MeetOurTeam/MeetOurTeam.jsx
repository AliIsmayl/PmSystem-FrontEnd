import React, { useEffect, useRef, useState } from 'react';
import './MeetOurTeam.scss';
import cardBackground from '../../../Image/BackgroundCard.png';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import back from '../../../Image/CardBack.png';

function MeetOurTeam() {
    const { t } = useTranslation();
    const teamBoxRef = useRef(null);
    const [team, setTeam] = useState([]);
    const [openedCardIndex, setOpenedCardIndex] = useState(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    async function getData() {
        try {
            const res = await axios.get(`https://api.pmsystems.az/qrcode/list/all/`);
            const sortedData = res.data.sort((a, b) => a.order - b.order);
            setTeam(sortedData);
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
        teamBoxRef.current.scrollLeft += 300; // Scroll 300px to the right
        updateButtonVisibility(); // Check button visibility
    }

    function scrollLeft() {
        teamBoxRef.current.scrollLeft -= 300; // Scroll 300px to the left
        updateButtonVisibility(); // Check button visibility
    }

    function updateButtonVisibility() {
        const { scrollLeft, scrollWidth, clientWidth } = teamBoxRef.current;

        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        updateButtonVisibility(); // Initial button visibility check
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
                <button
                    onClick={scrollRight}
                    className="scrollButton rightButton"
                    style={{ opacity: showRightButton ? 1 : 0 }}
                >
                    <FaArrowRight />
                </button>
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
                            <img src={back} alt="Team Member" />
                            {/* <img src={item.image_url} alt="Team Member" /> */}
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
