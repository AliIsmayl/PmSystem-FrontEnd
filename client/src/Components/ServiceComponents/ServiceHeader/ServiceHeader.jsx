import React from 'react';
import Image from '../../../Image/ServiceHeader.png';
import './ServiceHeader.scss';

function ServiceHeader() {
  return (
    <header id='serviceHeader' style={{ backgroundImage: `url(${Image})` }}>
      <p>Our services</p>
      <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span>

    </header>
  )
}

export default ServiceHeader