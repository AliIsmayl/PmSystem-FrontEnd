import React from 'react'
import './Loading.scss'
import Logo from '../../Image/LogoTransparent.png'
function Loading() {
    return (
        <section className='loading'>
            <div className="loadingBox">
                <img src={Logo} alt="" />
            </div>
        </section>
    )
}

export default Loading