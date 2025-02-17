import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faLinkedinIn,
  faGoogle,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-metlifeDarkBlue text-metlifeBlue py-8">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-lg text-metlifeBlue font-bold mb-4">Denko Swoboda</h3>
          <p className="text-metlifeBlue">Protege lo que más valoras.</p>
          <div>
            <h3 className="text-lg text-metlifeBlue font-bold mb-4">Contacto</h3>
            <p className="text-metlifeBlue">
              Email: miroslav.swoboda@gmail.com
            </p>
            <p className="text-metlifeBlue">Teléfono: +57 3001608866</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg text-metlifeBlue font-bold mb-4">Navegación</h3>
          <ul>
            <li>
              <Link to="/" className="fA text-metlifeBlue hover:text-metlifeGreen">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" className="fA text-metlifeBlue hover:text-metlifeGreen">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/services" className="fA text-metlifeBlue hover:text-metlifeGreen">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/contact" className="fA text-metlifeBlue hover:text-metlifeGreen">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-start md:mt-0 mt-8 space-x-4">
          <a
            href="https://wa.me/573001608866"
            className="hover:text-metlifeGreen"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/denkoswoboda/"
            className="hover:text-metlifeGreen"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/miroslav-swoboda-865a74193/"
            className="hover:text-metlifeGreen"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a
            href="mailto:miroslav.swoboda@gmail.com"
            className="hover:text-metlifeGreen"
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;