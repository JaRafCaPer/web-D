import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero bg-metlifeBlue  font-sans">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4 py-8">
        <h2 className="font-bold  text-white mb-4">Protegemos tu futuro y el de tu familia:</h2>
        <div className="bombing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card  p-4 rounded-lg shadow-md">
            <p className="mb-4">¿Te gustaría garantizar la mejor educación para tus hijos?</p>
          </div>
          <div className="card  p-4 rounded-lg shadow-md">
            <p className="mb-4">¿Te interesa hacer crecer tu capital con inversiones confiables en Estados Unidos?</p>
          </div>
          <div className="card  p-4 rounded-lg shadow-md">
            <p className="mb-4">¿Sueñas con un retiro seguro y lleno de tranquilidad?</p>
          </div>
          <div className="card  p-4 rounded-lg shadow-md">
            <p className="mb-4">¿Estás listo para proteger a tu familia contra cualquier imprevisto?</p>
          </div>
          <div className="card  p-4 rounded-lg shadow-md">
            <p className="mb-4">¿Quieres convertir tus ahorros en un patrimonio sólido?</p>
          </div>
          <div className="card  p-4 rounded-lg shadow-md">
            <p className="mb-4">¿Buscas asesoría personalizada para tus necesidades financieras?</p>
          </div>
        </div>
        <h3 className="text-white mb-6">Diseñamos soluciones que te brindan seguridad, estabilidad y tranquilidad.</h3>
        <a
          href="/services"
          className="btns text-white px-6 py-3 rounded-lg hover:bg-metlifeDarkBlue"
        >
          <p className="">Explora nuestros servicios</p>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;