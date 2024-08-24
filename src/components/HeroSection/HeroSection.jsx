import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

function HeroSection() {
    return (
        <div className="hero bg-metlifeBlue text-white font-sans">
            <ImageCarousel />
            <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Protegemos el futuro de tu familia</h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8">Soluciones diseñadas para tu bienestar y tranquilidad.</p>
                <a href="/services" className="btn bg-metlifeGreen text-white px-6 py-3 rounded-lg hover:bg-metlifeDarkBlue">
                    Ver Servicios
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
