import React, { useState } from "react";
import "./TestimonialReel.css";

const testimonials = [
  {
    name: "Pedro López",
    feedback: "Gracias a Denko Swoboda, planifiqué mi jubilación con confianza.",
    rating: 5,
  },
  {
    name: "Lucía Ramírez",
    feedback: "La asesoría personalizada de Denko Swoboda fue increíble.",
    rating: 4,
  },
  {
    name: "Roberto Sánchez",
    feedback: "Denko Swoboda superó todas mis expectativas.",
    rating: 5,
  },
  {
    name: "Ana María",
    feedback: "Excelente servicio y atención al cliente.",
    rating: 4,
  },
  {
    name: "Carlos Pérez",
    feedback: "Muy profesional y atento a los detalles.",
    rating: 5,
  },
  {
    name: "María Fernández",
    feedback: "Recomiendo a Denko Swoboda sin dudarlo.",
    rating: 5,
  },
  {
    name: "Jorge Martínez",
    feedback: "Denko Swoboda me ayudó a entender mejor mis opciones de seguro.",
    rating: 4,
  },
  {
    name: "Sofía Gómez",
    feedback: "Muy satisfecho con el servicio recibido.",
    rating: 5,
  },
  {
    name: "Andrés Torres",
    feedback: "Denko Swoboda es un profesional muy competente.",
    rating: 5,
  },
  {
    name: "Laura Castillo",
    feedback: "La atención al cliente fue excelente.",
    rating: 4,
  },
  {
    name: "Fernando Ruiz",
    feedback: "Recomiendo a Denko Swoboda por su profesionalismo.",
    rating: 5,
  },
  {
    name: "Isabel Morales",
    feedback: "Muy contenta con los resultados obtenidos.",
    rating: 5,
  },
];

function TestimonialReel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 3 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, index) => (
        <span key={index} className="star">
          &#9733;
        </span>
      ));
  };

  return (
    <div className="carousel slide">
      <div className="carousel-inner">
        {testimonials.slice(currentSlide, currentSlide + 3).map((testimonial, index) => (
          <div className="testimonial-slide" key={index}>
            <p className="testimonial-feedback">
              "{testimonial.feedback}"
            </p>
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default TestimonialReel;