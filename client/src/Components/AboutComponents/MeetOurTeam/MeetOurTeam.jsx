import React, { useEffect, useRef } from 'react';
import './MeetOurTeam.scss';
import cardBackground from '../../../Image/BackgroundCard.png';
import oglan from '../../../Image/oglan.png';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function MeetOurTeam() {
    const { t } = useTranslation();
    const teamBoxRef = useRef(null);

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
                {Array(20).fill().map((_, index) => (
                    <div className="card" style={{ backgroundImage: `url(${cardBackground})` }} key={index}>
                        <div className="imgBox">
                            <img src={oglan} alt="Team Member" />
                        </div>
                        <div className="textBox">
                            <h5>Ali İsmayıl</h5>
                            <p>Front End Developer</p>
                            <span><Link to={'mailto:ali.ismayil.681@gmail.com'} className='link'>ali.ismayil.681@gmail.com</Link></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MeetOurTeam;
