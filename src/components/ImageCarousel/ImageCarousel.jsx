// src/components/ImageCarousel/ImageCarousel.jsx
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

import './ImageCarousel.css';

function ImageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={img1} alt="Slide 1" />
            </div>
            <div>
                <img src={img2} alt="Slide 2" />
            </div>
            <div>
                <img src={img3} alt="Slide 3" />
            </div>
            <div>
                <img src={img4} alt="Slide 4" />
            </div>
            <div>
                <img src={img5} alt="Slide 5" />
            </div>
            <div>
                <img src={img6} alt="Slide 6" />
            </div>
            <div>
                <img src={img7} alt="Slide 7" />
            </div>
        </Slider>
    );
}

export default ImageCarousel;
