import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-lg fixed w-full z-50">
                <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
                    <Link to="/" className="text-xl md:text-2xl font-bold text-metlifeBlue">Denko Swoboda</Link>
                    <button 
                        className=" text-metlifeBlue text-3xl md:text-4xl" 
                        onClick={() => setIsMenuOpen(true)}>
                        ☰
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>
            )}

            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out w-1/2 md:w-1/3`}
            >
                <button className="text-right p-4 text-metlifeBlue font-bold" onClick={() => setIsMenuOpen(false)}>
                    ✖
                </button>
                <ul className="flex flex-col items-start p-4 space-y-4">
                    <li><Link to="/" className="text-xl text-gray-700 hover:text-metlifeBlue" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
                    <li><Link to="/about" className="text-xl text-gray-700 hover:text-metlifeBlue" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
                    <li><Link to="/services" className="text-xl text-gray-700 hover:text-metlifeBlue" onClick={() => setIsMenuOpen(false)}>Servicios</Link></li>
                    <li><Link to="/contact" className="text-xl text-gray-700 hover:text-metlifeBlue" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
