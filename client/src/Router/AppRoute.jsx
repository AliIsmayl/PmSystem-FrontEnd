import React, { useEffect } from 'react';
import Navbar from '../Layout/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';
import SubscribeBox from '../Components/SubscribeBox/SubscribeBox';
import GoogleAnalitic from '../GoogleAnalitic';

function AppRoute() {
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    return (
        <>
            <ScrollToTop />
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        color: '#713200',
                        fontFamily: "Gilroy-Light"
                    },
                    duration: 1000,
                }} 
            />
            <Navbar />
            <Outlet />
            <SubscribeBox/>
            <Footer />
            <GoogleAnalitic/>

        </>
    );
}

export default AppRoute;
