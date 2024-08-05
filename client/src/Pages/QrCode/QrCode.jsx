import React from 'react'
import './QrCode.scss'
import Logo from '../../Image/whiteLogo.png'
import { Link } from 'react-router-dom'

function QrCode() {
    return (
        <section id='qrCode'>
            <img src={Logo} alt="" />
            <Link className='link' to={''}>E-mail</Link>
            <Link className='link' to={'https://www.linkedin.com/company/pmsystems/'}>Linkedin</Link>
            <Link className='link' to={'https://pmsystems.az/'}>Website</Link>
        </section>
    )
}

export default QrCode