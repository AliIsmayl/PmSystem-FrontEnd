import React from 'react'
import './WhyChooseUs.scss'
import Choose1image from '../../../Image/Choose1.png'
import Choose2image from '../../../Image/Choose2.png'
import Choose3image from '../../../Image/Choose3.png'
import Choose4image from '../../../Image/Choose4.png'

function WhyChooseUs() {
    return (
        <section id='whyChooseUs'>
            <div className="upTextBox">
                <p>Why Choose
                    Us?</p>
            </div>
            <div className="downTextBox">
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose1image} style={{ maxWidth: "200px" }} alt="" />
                    </div>
                    <h1>Expertise</h1>
                    <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge and experience to tackle any IT challenge</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose2image} alt="" />
                    </div>
                    <h1>Expertise</h1>
                    <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge and experience to tackle any IT challenge</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose3image} alt="" />
                    </div>
                    <h1>Expertise</h1>
                    <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge and experience to tackle any IT challenge</p>
                </div>
                <div className="chooseCardBox">
                    <div className="imgBox">
                        <img src={Choose4image} alt="" />
                    </div>
                    <h1>Expertise</h1>
                    <p>With over [X] years in the industry, our team of certified professionals brings a wealth of knowledge and experience to tackle any IT challenge</p>
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs