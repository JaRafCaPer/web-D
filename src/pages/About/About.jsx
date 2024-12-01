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
            Denko Swoboda - Magister en Seguros
          </h2>
          <p className="leading-relaxed mb-4">
           Soy Denko Swoboda, abogado graduado de
            la Universidad de Cartagena, especializado en Derecho Administrativo
            con una maestría en Seguros y más de 14 años de experiencia. Mi
            práctica profesional abarca tanto la asesoría legal en seguros como
            la planificación patrimonial, siempre con el objetivo de
            proporcionar seguridad y tranquilidad a mis clientes.
          </p>
          <p className="leading-relaxed mb-4">
            Entiendo que cada situación es única, por lo que adapto mis
            servicios a las necesidades específicas de cada persona, brindando
            un enfoque cercano y efectivo.
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
      <div className="cta-section bg-metlifeGreen  text-center">
        <h3 className="font-bold mb-4">¿Listo para proteger tu futuro?</h3>
        <p className="mb-6 text-white">
          Estoy aquí para guiarte en cada paso de tu planificación financiera y
          legal. Juntos podemos crear estrategias efectivas que garanticen la
          seguridad de tu familia y tu patrimonio.
        </p>
      </div>
      <div className="values-section  py-12 text-center">
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
