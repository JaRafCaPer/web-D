// src/components/Modal/Modal.jsx
import React, { useState } from 'react';
import './Modal.css';

function Modal({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleModal} className="learn-more-btn bg-metlifeGreen text-white px-4 py-2 rounded-lg hover:bg-metlifeDarkBlue transition-colors">
                Learn More
            </button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className="text-xl font-bold text-metlifeDarkBlue mb-4">{title}</h2>
                        <p className="text-metlifeBlue leading-relaxed">{content}</p>
                        <button onClick={toggleModal} className="close-modal-btn bg-metlifeDarkBlue text-white px-4 py-2 rounded-lg mt-4 hover:bg-metlifeBlue">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
