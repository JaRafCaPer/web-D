// src/components/TestimonialCarousel/TestimonialCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/images/FJPL0371.jpg';
import img2 from '../../assets/images/FJPL0374.jpg';
import img3 from '../../assets/images/FJPL0410.jpg';
import img4 from '../../assets/images/photo4.jpg';
import img5 from '../../assets/images/FJPL0465.jpg';
import img6 from '../../assets/images/FJPL0549.jpg';
import img7 from '../../assets/images/FJPL0573.jpg';
import './TestimonialReel.css';

function TestimonialCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const testimonials = [
        {
            name: "Carlos Gómez",
            photo: img1,
            feedback: "Denko Swoboda me ayudó a proteger a mi familia en los momentos más difíciles. Su asesoría fue excepcional."
        },
        {
            name: "Ana Martínez",
            photo: img2,
            feedback: "La tranquilidad que obtuve con Denko Swoboda es invaluable. Estoy muy agradecida por su apoyo."
        },
        {
            name: "Juan Rodríguez",
            photo: img3,
            feedback: "Denko Swoboda me ofreció las mejores soluciones para asegurar el bienestar de mis seres queridos."
        },
        {
            name: "María Fernández",
            photo: img4,
            feedback: "Con Denko Swoboda, siento que mi futuro y el de mi familia están en buenas manos. Un servicio confiable."
        },
        {
            name: "Pedro López",
            photo: img5,
            feedback: "Gracias a Denko Swoboda, pude planificar mi jubilación con confianza. Excelente atención y soluciones."
        },
        {
            name: "Lucía Ramírez",
            photo: img6,
            feedback: "La asesoría personalizada de Denko Swoboda fue increíble. Ahora sé que estoy preparada para cualquier imprevisto."
        },
        {
            name: "Roberto Sánchez",
            photo: img7,
            feedback: "Denko Swoboda superó todas mis expectativas. ¡Recomiendo sus servicios a todos!"
        }
    ];

    return (
        <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide text-center p-4 md:p-8">
                    <img
                        src={testimonial.photo}
                        alt={`Testimonial ${index + 1}`}
                        className="mx-auto rounded-full w-24 h-24 md:w-32 md:h-32 mb-4 object-cover"
                    />
                    <h3 className="text-lg md:text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-sm md:text-base text-gray-300">{testimonial.feedback}</p>
                </div>
            ))}
        </Slider>
    );
}

export default TestimonialCarousel;
