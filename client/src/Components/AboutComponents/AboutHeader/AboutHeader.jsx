import React from 'react'
import './AboutHeader.scss'
import Image from '../../../Image/AboutHeader.png'
function AboutHeader() {
    return (
        <header id='aboutHeader' style={{ backgroundImage: `url(${Image})` }}>
            <p>ABOUT US</p>
            <span>PM System is dedicated to enhancing your business with innovative solutions and expert guidance. Our team of professionals uses state-of-the-art technology to deliver precise, high-quality results for every project. We focus on optimizing systems and managing projects with tailored support to ensure your success and growth.</span>
        </header>
    )
}

export default AboutHeader