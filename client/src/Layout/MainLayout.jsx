import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import toast, { Toaster } from 'react-hot-toast';

function MainLayout() {
    return (
        <>
            <Toaster />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout