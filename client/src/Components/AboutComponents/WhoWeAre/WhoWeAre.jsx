import React from 'react'
import './WhoWeAre.scss'
import BackgroundImage from '../../../Image/BackgroundAbout.png'

function WhoWeAre() {
    return (
        <section id='whoWeAre' style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <h1 data-aos="fade-right" data-aos-duration="1000">Who we are?</h1>
            <div className="textBox">
                <span data-aos="fade-right" data-aos-duration="1000">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </span>
                <p data-aos="fade-left" data-aos-duration="1000">Pm systems is a consulting firm focused on serving the comprehensive needs of businesses in the full range of the business cycle. With a core staff of experienced professionals and a team approach to most consulting projects, mn icit will be able to offer a more balanced quality service than many of its competitors. We offer innovative business management solutions, and can implement complex projects to increase the manageability, efficiency and competitiveness of our clients' businesses.</p>
            </div>
        </section>
    )
}

export default WhoWeAre