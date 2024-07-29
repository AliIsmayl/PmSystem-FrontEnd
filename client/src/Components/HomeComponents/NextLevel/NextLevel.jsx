import React from 'react'
import './NextLevel.scss'
import { Link } from "react-router-dom";

function NextLevel() {
    return (
        <section id='nextLevel'>
            <div className="upBox">
                <h1>Ready to take
                    your businness
                    to the </h1>
                <h5> next level?</h5>
                <div className="normalBox">
                    <div className="counBox">
                        <p>500+</p>
                        <h6>Succesfull Projects</h6>
                    </div>
                    <span></span>
                    <div className="counBox">
                        <p>120+</p>
                        <h6>Lorem Ipsum</h6>
                    </div>
                    <span></span>
                    <div className="counBox">
                        <p>98%</p>
                        <h6>Satisfied Clients</h6>
                    </div>
                </div>
            </div>
            <div className="downBox">
                <Link className='link'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
                </Link>
                <Link className='link'>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2015-2016.png" alt="" />
                </Link>
                <Link className='link'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
                </Link>
                <Link className='link'>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2015-2016.png" alt="" />
                </Link>
            </div>

        </section>
    )
}

export default NextLevel