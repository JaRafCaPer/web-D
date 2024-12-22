import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGoogle, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Socials.css";

function Socials() {
  return (
    <div className="socials-container">
      <a href="https://wa.me/573001608866" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="mailto:miroslav.swoboda@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGoogle} />
      </a>
      <a href="https://www.instagram.com/denkoswoboda/" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/miroslav-swoboda-865a74193/" className="social-icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}

export default Socials;