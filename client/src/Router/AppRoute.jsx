import React from 'react'
import Navbar from '../Layout/Navbar/Navbar'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer/Footer'

function AppRoute() {
    return (
        <>
            <Toaster />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppRoute