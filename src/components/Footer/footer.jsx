import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-metlifeDarkBlue text-metlifeBlue py-8">
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div>
                    <h3 className="text-lg font-bold mb-4">MetLife</h3>
                    <p className="text-metlifeBlue">Protege lo que más valoras.</p>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contacto</h3>
                        <p className="text-metlifeBlue">Email: contacto@metlife.com.co</p>
                        <p className="text-metlifeBlue">Tel: +57 1 234 5678</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Navegación</h3>
                    <ul>
                        <li><a href="/" className="hover:text-metlifeGreen">Inicio</a></li>
                        <li><a href="/about" className="hover:text-metlifeGreen">Nosotros</a></li>
                        <li><a href="/services" className="hover:text-metlifeGreen">Servicios</a></li>
                        <li><a href="/contact" className="hover:text-metlifeGreen">Contacto</a></li>
                    </ul>
                </div>
                <div className="flex justify-center md:justify-start md:mt-0 mt-8 space-x-4">
                    <a href="#" className="hover:text-metlifeGreen">
                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                    <a href="#" className="hover:text-metlifeGreen">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="#" className="hover:text-metlifeGreen">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
