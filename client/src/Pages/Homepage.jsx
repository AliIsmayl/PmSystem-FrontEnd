import React, { useEffect } from "react";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs/WhyChooseUs";
import OurService from "../Components/HomeComponents/OurService/OurService";
import NextLevel from "../Components/HomeComponents/NextLevel/NextLevel";
import Faq from "../Components/HomeComponents/Faq/Faq";
import Header from "../Components/HomeComponents/Header/Header";
import i18next from "../i18n";

function Homepage() {
  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", JSON.stringify("EN"));
    }
    const NavLang = localStorage.getItem("language").toLowerCase();
    const i18nextLng = localStorage.getItem("i18nextLng");
    console.log("i18n:", i18nextLng);
    if (i18nextLng) {
      localStorage.setItem("i18nextLng", NavLang.replace(/"/g, ''));
      i18next.changeLanguage(NavLang.replace(/"/g, ''));
    }
    // if (!i18nextLng) {
    //   localStorage.setItem("i18nextLng", "en");
    //   i18next.changeLanguage("en");
    // }
    
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
