import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import MainLayout from './Layout/MainLayout';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/serviceDetail" element={<ServiceDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
