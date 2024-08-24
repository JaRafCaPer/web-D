// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-metlifeBlue">Denko Swoboda</Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="text-metlifeDarkBlue-700 hover:text-metlifeBlue">Inicio</Link></li>
                        <li><Link to="/about" className="text-metlifeDarkBlue-700 hover:text-metlifeBlue">Nosotros</Link></li>
                        <li><Link to="/services" className="text-metlifeDarkBlue-700 hover:text-metlifeBlue">Servicios</Link></li>
                        <li><Link to="/contact" className="text-metlifeDarkBlue-700 hover:text-metlifeBlue">Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
