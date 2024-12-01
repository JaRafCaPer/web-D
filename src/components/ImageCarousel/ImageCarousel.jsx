import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/FJPL0371.jpg";
import img2 from "../../assets/images/FJPL0374.jpg";
import img3 from "../../assets/images/FJPL0410.jpg";
import img4 from "../../assets/images/FJPL0485.jpg";
import img5 from "../../assets/images/FJPL0465.jpg";
import img6 from "../../assets/images/FJPL0549.jpg";
import img7 from "../../assets/images/FJPL0573.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";
import { Arrows } from "react-bootstrap-icons";

function ImageCarousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;