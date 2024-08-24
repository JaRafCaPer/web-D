import React, { useState, useRef } from 'react';
import img1 from '../../assets/images/FJPL0371.jpg';
import img2 from '../../assets/images/FJPL0374.jpg';
import img3 from '../../assets/images/FJPL0410.jpg';
import img4 from '../../assets/images/FJPL0485.jpg';
import img5 from '../../assets/images/FJPL0465.jpg';
import img6 from '../../assets/images/FJPL0549.jpg';
import img7 from '../../assets/images/FJPL0573.jpg';
import './ImageCarousel.css';

function ImageCarousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const moveX = e.touches[0].clientX;
    const diffX = startX.current - moveX;

    if (diffX > 50) {
      nextSlide();
    } else if (diffX < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="imgCarous flex transition-transform duration-500"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
          className="w-full md:w-1/2 flex-shrink-0 px-2 transition-transform transform ease-in-out duration-300"
          key={index}
          style={{ flexBasis: `${100 / images.length}%` }} // Ensure each image gets equal width
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-contain"
          />
          
        </div>
          
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-500 text-white rounded-full p-2"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-500 text-white rounded-full p-2"
      >
        ❯
      </button>
    </div>
  );
}

export default ImageCarousel;
