import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import './App.css';
import './i18n';
import { ROUTE } from './Router/Route';



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const router = createBrowserRouter(ROUTE)

  return (
    <RouterProvider router={router} />

    // <>
    //   <BrowserRouter>
    //     <ScrollToTop />
    //     <Routes>
    //       <Route path="/" element={<MainLayout />} >
    //         <Route path="/" element={<Homepage />} />
    //         <Route path="/about" element={<AboutPage />} />
    //         <Route path="/service" element={<ServicePage />} />
    //         <Route path="/contact" element={<ContactPage />} />
    //         <Route path="/serviceDetail" element={<ServiceDetail />} />
    //       </Route>
    //       <Route path="/qrCode" element={<QrCode />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
  );
}

export default App;
