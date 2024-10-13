import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import TestimonialCarousel from '../../components/Testimonial/TestimonialReel.jsx';
import denkoImage from '../../assets/images/armCrossed.png'; 
import familyImage from '../../assets/images/pexels-liam-anderson-411198-2120220.jpg';
import Form from '../../components/Form/ContactForm';
import ServicesCards from '../../components/ServicesCards/ServicesCards';



function Home() {
  return (
    <>
      <div className="parent">
        <div className="div1">
            <div>
            <h1>¡Bienvenido a mi página web!<br/><br/></h1>
          <p>
            Soy Denko Swoboda, abogado especializado en Derecho Administrativo con una maestría en Seguros y 14 años de experiencia en el sector. Actualmente, formo parte de la gerencia comercial de MetLife, donde me dedico a proteger el bienestar de las familias a través de asesoría en seguros y planeación patrimonial.<br/><br/>
            Mis servicios incluyen asesoría legal en seguros, estrategias para asegurar el futuro financiero y consultoría personalizada, siempre con un enfoque humano y empático.<br/><br/>
            ¡Contáctame para una consulta personalizada!<br/><br/>
            Gracias por visitar mi página. Estoy aquí para ayudarte a asegurar un futuro más seguro y tranquilo.
          </p>
          </div>
        </div>
        <div className="div2">
          <img src={denkoImage} alt="Denko Swoboda" className="w-full h-full object-contain" />
        </div>
      </div>
      <HeroSection />
      <ServicesCards/>
      <TestimonialCarousel />
      <div className="div3">
        <div className='subDiv3'>
        <img src={familyImage} alt="" />
        <p className='pieFoto'>Foto de Liam Anderson</p>
        </div>
        <Form className="Formulario" />
      </div> 
    </>
  );
}

export default Home;
