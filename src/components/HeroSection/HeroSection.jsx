import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero bg-metlifeBlue text-white font-sans">
      <div className="container mx-auto flex flex-col items-center justify-center  text-center px-4">
        <h2 className="font-bold mb-4">Protegemos el futuro de tu familia</h2>
        <h3 className="">
          Soluciones diseñadas para tu bienestar y tranquilidad.
        </h3>
        <a
          href="/services"
          className="btns bg-metlifeGreen  px-6 py-3 rounded-lg hover:bg-metlifeDarkBlue"
        >
          <p className="text-white">Ver Servicios</p>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
