import React from 'react'
import './ServiceDetailHeader.scss'
import Image from '../../Image/ServiceHeader.png'
import { IoIosArrowForward } from "react-icons/io";

function ServiceDetailHeader() {
  return (
    <header id='serviceDetailHeader' style={{ backgroundImage: `url(${Image})` }}>
      <div className="goLink">
        <span>Services</span>
        <IoIosArrowForward />
        <span>SAP System</span>
      </div>
      <p>SAP systems implementation and technical support</p>
      <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span>

    </header>
  )
}

export default ServiceDetailHeader