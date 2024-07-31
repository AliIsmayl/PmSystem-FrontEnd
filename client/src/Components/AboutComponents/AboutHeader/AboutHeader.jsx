import React from 'react'
import './AboutHeader.scss'
import Image from '../../../Image/AboutHeader.png'
function AboutHeader() {
    return (
        <header id='aboutHeader' style={{ backgroundImage: `url(${Image})` }}>
            <p>ABOUT US</p>
            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span>
        </header>
    )
}

export default AboutHeader