import React, { useState } from 'react'
import './ContactComponents.scss'
import { PiPhoneCall } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import image from '../../Image/ContactHeader.png'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function ContactComponents() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const serviceId = "service_yqt4iub"
        const templateId = "template_bz00sv7"
        const publicKey = "FUls4Y1eg7htMlhlv"

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Project Management System",
            message: message

        }

        emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
            setEmail('')
            setMessage('')
            setName('')
            toast.success('The message has been sent.')
        })
            .catch((error) => {
                console.error("Error send email:", error)
            })

    }
    return (
        <section id='contactComponents' style={{ backgroundImage: `url(${image})` }}>
            <div className="containerContactBox">
                <h1 data-aos="fade-right" data-aos-duration="1000">Contact us</h1>
                <div className="leftBox" data-aos="fade-right" data-aos-duration="1000">
                    <div className="textBox">
                        <PiPhoneCall />
                        <p>+994 55 343 21 43</p>
                    </div>
                    <div className="textBox">
                        <AiOutlineMail />
                        <p>office@pmsystems.az</p>
                    </div>
                    <div className="textBox">
                        <IoLocationSharp />
                        <p>46 Ashiq Molla Juma, Baku</p>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.0517443662766!2d49.8577419758269!3d40.407704471441065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087a9f8397a0b%3A0xf214b7c81735e508!2sPM%20Systems%20LLC%20-%20Project%20Management%20Systems!5e0!3m2!1saz!2saz!4v1722495576696!5m2!1saz!2saz" frameborder="0" ></iframe>
                </div>
                <div className="rightBox" data-aos="fade-left" data-aos-duration="1000">
                    <p>Contact in the form of a request</p>
                    <span>Feel free to reach out to us for any inquiries or assistance.</span>
                    <div className="chanegInputBox">
                        <form onSubmit={handleSubmit} action="" className='businessForm'>
                            <div className="smallBoxs">
                                <div className="smallBox">
                                    <label htmlFor="">Name,Surname</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="smallBox">
                                    <label htmlFor="">Email </label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            {/* <div className="smallBoxs">
                                <div className="smallBox">
                                    <label htmlFor="">Company Name</label>
                                    <input type="text" />
                                </div>
                                <div className="smallBox">
                                    <label htmlFor="">Position</label>
                                    <input type="text" />
                                </div>
                            </div> */}
                            {/* <div className="bigBox">
                                <label htmlFor="">Service</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div> */}
                            <div className="bigBox">
                                <label htmlFor="">Message</label>
                                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactComponents