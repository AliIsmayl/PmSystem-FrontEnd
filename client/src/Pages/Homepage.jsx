import React, { useEffect } from 'react';
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs/WhyChooseUs';
import OurService from '../Components/HomeComponents/OurService/OurService';
import NextLevel from '../Components/HomeComponents/NextLevel/NextLevel';
import Faq from '../Components/HomeComponents/Faq/Faq';
import Header from '../Components/HomeComponents/Header/Header';
import i18next from '../i18n';

function Homepage() {

  useEffect(() => {
    // i18next.init({
    //   debug: false,
    //   // diğer ayarlar
    // });
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', JSON.stringify('EN'));
    }

    const i18nextLng = localStorage.getItem('i18nextLng');
    if (!i18nextLng || i18nextLng === 'en-US') {
      localStorage.setItem('i18nextLng', 'en');
      i18next.changeLanguage('en');
    } else {
      i18next.changeLanguage(i18nextLng);
    }
    
  }, []);


  return (
    <>
      <Header />
      <WhyChooseUs />
      <OurService />
      <NextLevel />
      <Faq going={true} />
    </>
  );
}

export default Homepage;
