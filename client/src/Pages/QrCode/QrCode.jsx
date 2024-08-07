import React from 'react'
import './QrCode.scss'
import Logo from '../../Image/whiteLogo.png'
import { Link } from 'react-router-dom'
import Background from '../../Image/qrCodeBack.png'
function QrCode() {
    return (
        <section id='qrCode' style={{backgroundImage:`url(${Background})`}}>
            <img src={Logo} alt="" />
            <Link className='link' to={''}>E-mail</Link>
            <Link className='link' to={'https://www.linkedin.com/company/pmsystems/'}>Linkedin</Link>
            <Link className='link' to={'https://pmsystems.az/'}>Website</Link>
        </section>
    )
}

export default QrCode