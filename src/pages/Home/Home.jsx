import React from 'react';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import HeroSection from '../../components/HeroSection/HeroSection';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/footer.jsx';
import TestimonialCarousel from '../../components/Testimonial/TestimonialReel.jsx';
function Home() {
    return (
        <>
            <Navbar />
            <ImageCarousel />
            <HeroSection />
            <TestimonialCarousel/>
            <Footer />
        </>
    );
}

export default Home;
