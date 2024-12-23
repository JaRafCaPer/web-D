import React from "react";
import Modal from "../../components/Modal/Modal";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ExpertiseCards from "../../components/ExpertiseCards/ExpertiseCards";
import img1 from "../../assets/images/About.png";
import "./About.css";

function About() {
  return (
    <div className="aboutBody">
      <div className="about-grid-container py-12">
        <div className="about-text">
          <h2 className="font-bold mb-4">
            Conoce a Denko Swoboda
          </h2>
          <p className="leading-relaxed mb-4">
            Hola, soy Denko Swoboda. Me gradué como abogado en la Universidad de Cartagena y me especialicé en Derecho Administrativo. Además, tengo una maestría en Seguros y más de 14 años de experiencia en el campo. Mi objetivo es proporcionar seguridad y tranquilidad a mis clientes a través de asesoría legal en seguros y planificación patrimonial.
          </p>
          <p className="leading-relaxed mb-4">
            Entiendo que cada situación es única, por lo que adapto mis servicios a las necesidades específicas de cada persona, brindando un enfoque cercano y efectivo.
          </p>
          <Modal
            title="Más Sobre Denko Swoboda"
            content="Mis servicios no solo abarcan la protección financiera y legal, sino que están diseñados para ofrecer tranquilidad. A través de una planificación cuidadosa, puedes estar seguro de que tu bienestar y el de tu familia están en buenas manos."
          />
        </div>
        <div className="about-image">
          <img
            src={img1}
            alt="Denko Swoboda"
            className="profile-img"
          />
        </div>
      </div>
      <div className="cta-section bg-metlifeGreen text-center">
        <h3 className="font-bold mb-4">¿Listo para proteger tu futuro?</h3>
        <p className="mb-6 text-white">
          Estoy aquí para guiarte en cada paso de tu planificación financiera y legal. Juntos podemos crear estrategias efectivas que garanticen la seguridad de tu familia y tu patrimonio.
        </p>
      </div>
      <div className="values-section py-12 text-center">
        <h3 className="font-bold mb-4">Áreas de Expertise</h3>
        <ExpertiseCards />
      </div>
      <div className="image-carousel">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default About;