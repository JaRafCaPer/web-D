import React from "react";
import "./Services.css";
import img1s from "../../assets/images/walk.png";
import ServicesCards from "../../components/ServicesCards/ServicesCards";
import TestimonialCarousel from "../../components/Testimonial/TestimonialReel.jsx";

function Services() {
  return (
    <>
      <div className="parents">
        <div className="div1s">
          <h1 className=" font-bold mb-4">Nuestros Servicios Profesionales</h1>
          <p className=" leading-relaxed">
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
      <ServicesCards />
      <TestimonialCarousel />
    </>
  );
}

export default Services;
