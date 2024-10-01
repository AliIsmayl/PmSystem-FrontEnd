import { useState } from "react";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import Homepage from "../Pages/Homepage";
import QrCode from "../Pages/QrCode/QrCode";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import ServicePage from "../Pages/ServicePage";
import AppRoute from "./AppRoute";
import CareerPage from "../Pages/CareerPage";
import VacancyDetail from "../Pages/VacancyDetail/VacancyDetail";
import ApplyJobPage from "../Pages/ApplyJobPage/ApplyJobPage";
import SendCvPage from "../Pages/SendCvPage/SendCvPage";

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
          path: "/career",
          element: <CareerPage />
        },
        {
          path: "/yoxlama",
          element: <VacancyDetail />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/app",
          element: <ApplyJobPage />
        },
        {
          path: "/sendCv",
          element: <SendCvPage />
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
