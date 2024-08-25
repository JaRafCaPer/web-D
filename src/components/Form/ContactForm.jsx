import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic (e.g., send to backend or email)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-container">
            <h2 className="text-4xl font-bold text-metlifeDarkBlue mb-4 text-center">¡Estamos Aquí para Ayudarte!</h2>
            <p className="text-lg text-metlifeBlue mb-8 text-center">
                ¿Tienes alguna pregunta o necesitas asesoría personalizada? No dudes en ponerte en contacto conmigo. Estoy aquí para brindarte la tranquilidad y seguridad que tú y tu familia necesitan.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-metlifeBlue focus:border-metlifeBlue sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-metlifeBlue focus:border-metlifeBlue sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-metlifeBlue focus:border-metlifeBlue sm:text-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-metlifeGreen text-white py-2 px-4 rounded-lg hover:bg-metlifeDarkBlue transition-colors duration-300"
                >
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
