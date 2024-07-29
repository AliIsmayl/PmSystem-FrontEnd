import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import MainLayout from './Layout/MainLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service/detail" element={<ServiceDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
