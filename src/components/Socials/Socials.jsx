import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Socials() {
    return (
        
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div className="flex justify-center md:justify-start md:mt-0 mt-8 space-x-4">
                    <a href="https://wa.me/573001608866" className="hover:text-metlifeGreen">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/denkoswoboda/" className="hover:text-metlifeGreen">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/miroslav-swoboda-865a74193/" className="hover:text-metlifeGreen">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                    <a href="mailto:miroslav.s.swoboda@metlife.com.co" className="hover:text-metlifeGreen">
                        <FontAwesomeIcon icon={faGoogle} size="2x" />
                    </a>
                </div>
            </div>
        
    );
}

export default Socials;
