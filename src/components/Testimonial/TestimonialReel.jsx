import React from 'react';
import { Carousel } from '@nextui-org/react';

const testimonials = [
  {
    name: 'Cliente 1',
    feedback: 'El servicio de Denko fue excepcional. Nos ayudó en un momento difícil y estamos muy agradecidos.',
  },
  {
    name: 'Cliente 2',
    feedback: 'Denko es un abogado muy profesional y conocedor. Recomiendo sus servicios a todos.',
  },
  // Agrega más testimonios según sea necesario
];

const TestimonialReel = () => {
  return (
    <div className="testimonial-reel bg-white p-8 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-metlifeBlue mb-4">Testimonios</h2>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <p className="text-black italic">"{testimonial.feedback}"</p>
            <p className="text-metlifeBlue mt-2">- {testimonial.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialReel;
