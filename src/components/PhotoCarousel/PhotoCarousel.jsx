import React from 'react';
import { Carousel } from '@nextui-org/react';

const photos = [
  '/assets/photo1.jpg',
  '/assets/photo2.jpg',
  '/assets/photo3.jpg',
  // Agrega más rutas de fotos según sea necesario
];

const PhotoCarousel = () => {
  return (
    <div className="photo-carousel bg-white p-8 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-metlifeBlue mb-4">Galería de Fotos</h2>
      <Carousel>
        {photos.map((photo, index) => (
          <div key={index} className="p-4">
            <img src={photo} alt={`Denko ${index + 1}`} className="rounded-md shadow-md" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
