import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ExpertiseCards from "../../components/ExpertiseCards/ExpertiseCards";
import img1 from "../../assets/images/About-CISRPVdC.webp";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="aboutBody">
      <div className="about-grid-container py-12">
        <div className="about-text" data-aos="fade-up">
          <h2 className="font-bold mb-4">
            Conoce a Denko Swoboda
          </h2>
          <p className="leading-relaxed mb-4">
            Hola, soy Denko Swoboda. Me gradué como abogado en la Universidad de Cartagena y me especialicé en Derecho Administrativo. Además, tengo una maestría en Seguros y más de 14 años de experiencia en el campo. Mi objetivo es proporcionar seguridad y tranquilidad a mis clientes a través de asesoría legal en seguros y planificación patrimonial.
          </p>
          <p className="leading-relaxed mb-4">
            Entiendo que cada situación es única, por lo que adapto mis servicios a las necesidades específicas de cada persona, brindando un enfoque cercano y efectivo.
          </p>
        </div>
        <div className="about-image" data-aos="fade-up">
          <img
            src={img1}
            alt="Denko Swoboda"
            className="profile-img"
          />
        </div>
      </div>
      <div className="cta-section bg-metlifeGreen text-center" data-aos="fade-up">
        <h3 className="font-bold mb-4">¿Listo para proteger tu futuro?</h3>
        <p className="p-cta text-white">
          Estoy aquí para guiarte en cada paso de tu planificación financiera y legal. Juntos podemos crear estrategias efectivas que garanticen la seguridad de tu familia. Aparta tu asesoria personalizada hoy:
        </p>
        <a
          href="/contact"
          className="btn-contact text-white bg-metlifeDarkBlue"
        >
          Contáctame
        </a>
      </div>
      <div className="values-section py-12 text-center" data-aos="fade-up">
        <h3 className="font-bold mb-4">Áreas de Expertise</h3>
        <ExpertiseCards />
      </div>
      <div className="image-carousel" data-aos="fade-right">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default About;