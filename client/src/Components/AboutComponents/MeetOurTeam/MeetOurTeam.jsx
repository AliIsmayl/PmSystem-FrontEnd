import React, { useEffect, useRef, useState } from 'react';
import './MeetOurTeam.scss';
import cardBackground from '../../../Image/BackgroundCard.png';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function MeetOurTeam() {
    const { t } = useTranslation();
    const teamBoxRef = useRef(null);
    const [team, setTeam] = useState([]);

    async function getData() {
        try {
            const res = await axios.get(`https://pmsystems.az/qrcode/list/all/`);
            setTeam(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
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
            }
        };

        const teamBox = teamBoxRef.current;
        teamBox.addEventListener('wheel', handleWheel);

        return () => {
            teamBox.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <section id='meetOurTeam'>
            <h1 data-aos="fade-right" data-aos-duration="1000">{t("MeetOurTeam")}</h1>
            <div className="ourTeamBox" ref={teamBoxRef}>
                {team && team.map((item, index) => (
                    <div className="card" style={{ backgroundImage: `url(${cardBackground})` }} key={index}>
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
