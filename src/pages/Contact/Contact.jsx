import React from "react";
import Form from "../../components/Form/ContactForm";
import Socials from "../../components/Socials/Socials";
import familyImage from "../../assets/images/pexels-liam-anderson-411198-2120220.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-body">
      <div className="form-data">
        <div className="form-photo">
          <img src={familyImage} alt="Family" />
          <p className="pieFoto">Foto de Liam Anderson</p>
        </div>
        <Form className="formulario" />
      </div>
      <Socials />
    </div>
  );
};

export default Contact;