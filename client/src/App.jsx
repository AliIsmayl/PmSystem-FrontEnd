import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import './i18n';
import { createRoutesWithLoading } from './Router/Route';
import Loading from "./Pages/Loading/Loading";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setloading(true);

    const timer = setTimeout(() => {
      setloading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setloading]);

  const router = createBrowserRouter(createRoutesWithLoading());

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
