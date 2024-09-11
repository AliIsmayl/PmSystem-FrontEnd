import { useState } from "react";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import Homepage from "../Pages/Homepage";
import QrCode from "../Pages/QrCode/QrCode";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import ServicePage from "../Pages/ServicePage";
import AppRoute from "./AppRoute";

export function createRoutesWithLoading() {

  return [
    {
      path: '/',
      element: <AppRoute />,
      children: [
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/service",
          element: <ServicePage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/service/:id",
          element: <ServiceDetail />
        },
      ]
    },
    {
      path: "/codes/:name",
      element: <QrCode />
    }
  ];
}
