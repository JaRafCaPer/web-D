
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsappButton.css';  

function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/573001608866" 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
    >
     <FontAwesomeIcon icon={faWhatsapp} size="3x" />
    </a>
  );
}

export default WhatsAppButton;
