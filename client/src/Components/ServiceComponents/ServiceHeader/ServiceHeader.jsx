import React from 'react';
import Image from '../../../Image/ServiceHeader.png';
import './ServiceHeader.scss';

function ServiceHeader() {
  return (
    <header id='serviceHeader' style={{ backgroundImage: `url(${Image})` }}>
      <p>Our services</p>
      <span>We work closely with SAP to offer a wide range of services for both SAP and non-SAP platforms. Our services include development, consulting, audit, quality assurance, automation, and artificial intelligence solutions to enhance your business operations. By partnering with us, you leverage cutting-edge technologies to increase your company's efficiency and competitiveness.</span>

    </header>
  )
}

export default ServiceHeader