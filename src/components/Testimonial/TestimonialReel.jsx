// src/components/TestimonialCarousel/TestimonialCarousel.jsx
import React, { useState } from 'react';
import img1 from '../../assets/images/FJPL0371.jpg';
import img2 from '../../assets/images/FJPL0374.jpg';
import img3 from '../../assets/images/FJPL0410.jpg';
import img4 from '../../assets/images/photo4.jpg';
import img5 from '../../assets/images/FJPL0465.jpg';
import img6 from '../../assets/images/FJPL0549.jpg';
import img7 from '../../assets/images/FJPL0573.jpg';
import './TestimonialReel.css';

function TestimonialCarousel() {
    const testimonials = [
        { name: "Carlos Gómez", photo: img1, feedback: "Denko Swoboda me ayudó a proteger a mi familia." },
        { name: "Ana Martínez", photo: img2, feedback: "La tranquilidad que obtuve con Denko Swoboda es invaluable." },
        { name: "Juan Rodríguez", photo: img3, feedback: "Denko Swoboda me ofreció las mejores soluciones." },
        { name: "María Fernández", photo: img4, feedback: "Con Denko Swoboda, siento que mi futuro está asegurado." },
        { name: "Pedro López", photo: img5, feedback: "Gracias a Denko Swoboda, planifiqué mi jubilación con confianza." },
        { name: "Lucía Ramírez", photo: img6, feedback: "La asesoría personalizada de Denko Swoboda fue increíble." },
        { name: "Roberto Sánchez", photo: img7, feedback: "Denko Swoboda superó todas mis expectativas." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="carousel bg-metlifeBlue ">
            <div className="carousel-inner ">
            <div className="testimonial-slide">
                    <img src={testimonials[currentSlide].photo} alt={testimonials[currentSlide].name} className="testimonial-img" />
                    <h3>{testimonials[currentSlide].name}</h3>
                    <p>{testimonials[currentSlide].feedback}</p>
                </div><div className="testimonial-slide">
                    <img src={testimonials[currentSlide].photo} alt={testimonials[currentSlide].name} className="testimonial-img" />
                    <h3>{testimonials[currentSlide].name}</h3>
                    <p>{testimonials[currentSlide].feedback}</p>
                </div>
                <div className="testimonial-slide">
                    <img src={testimonials[currentSlide].photo} alt={testimonials[currentSlide].name} className="testimonial-img" />
                    <h3>{testimonials[currentSlide].name}</h3>
                    <p>{testimonials[currentSlide].feedback}</p>
                </div>
                <div className="testimonial-slide">
                    <img src={testimonials[(currentSlide + 1) % testimonials.length].photo} alt={testimonials[(currentSlide + 1) % testimonials.length].name} className="testimonial-img" />
                    <h3>{testimonials[(currentSlide + 1) % testimonials.length].name}</h3>
                    <p>{testimonials[(currentSlide + 1) % testimonials.length].feedback}</p>
                </div>
            </div>
            <button onClick={prevSlide} className="carousel-btn left">❮</button>
            <button onClick={nextSlide} className="carousel-btn right">❯</button>
        </div>
    );
}

export default TestimonialCarousel;
