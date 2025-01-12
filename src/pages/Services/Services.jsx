import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Services.css";
import img1s from "../../assets/images/walk-DGTfnk3x.webp";
import ServicesCards from "../../components/ServicesCards/ServicesCards";
import TestimonialCarousel from "../../components/Testimonial/TestimonialReel.jsx";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="parents">
        <div className="div1s">
          <h1 className="font-bold mb-4">Nuestros Servicios Profesionales</h1>
          <p className="leading-relaxed">
            Como abogado me dedicado a proteger lo
            que más valoras, estoy aquí para ofrecerte soluciones personalizadas
            en seguros y planificación patrimonial. Mi objetivo es brindarte
            tranquilidad al saber que tu y tu familia están
            protegidos. Desde asesoría legal en seguros hasta la creación de
            estrategias financieras a medida, trabajo contigo para que puedas
            alcanzar tus metas con seguridad.
          </p>
        </div>
        <div className="div2s">
          <img src={img1s} alt="Asesoría" className="img1s" />
        </div>
      </div>

      <div data-aos="fade-right">
        <ServicesCards />
      </div>
      <div className="cta-section2" data-aos="fade-up">
        <h3>¿Listo para proteger a tu Familia?</h3>
        <p>Contáctame hoy para una consulta personalizada y descubre cómo puedo ayudarte a proteger lo que más valoras.</p>
        <a href="/contact">Contáctame</a>
      </div>
      <div data-aos="fade-right">
        <TestimonialCarousel />
      </div>
      
    </>
  );
}

export default Services;