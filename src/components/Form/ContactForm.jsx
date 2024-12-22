import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:miroslav.swoboda@gmail.com?subject=Contacto%20de%20${name}&body=Nombre:%20${name}%0AEmail:%20${email}%0AMensaje:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <h2 className="font-bold text-metlifeDarkBlue mb-4 text-center">
        ¡Estamos Aquí para Ayudarte!
      </h2>
      <p className=" mb-8 text-center">
        ¿Tienes alguna pregunta o necesitas asesoría personalizada? No dudes en
        ponerte en contacto conmigo. Estoy aquí para brindarte la tranquilidad y
        seguridad que tú y tu familia necesitan.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-metlifeDarkBlue mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-metlifeDarkBlue mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-metlifeDarkBlue mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-metlifeGreen text-white py-2 px-4 rounded hover:bg-metlifeDarkGreen"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;