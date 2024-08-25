import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Expertise from '../pages/Expertise/Expertise';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';

const AppRoutes = () => {
  return (
    <>
    
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/expertise" element={<Expertise />} />
      </Routes>
      <Footer />
    </Router>
   
    </>
  );
};

export default AppRoutes;
