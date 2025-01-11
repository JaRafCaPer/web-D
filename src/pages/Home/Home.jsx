import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Home.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import TestimonialCarousel from "../../components/Testimonial/TestimonialReel.jsx";
import denkoImage from "../../assets/images/armCrossed.png";
import familyImage from "../../assets/images/pexels-liam-anderson-411198-2120220.jpg";
import Form from "../../components/Form/ContactForm";
import ServicesCards from "../../components/ServicesCards/ServicesCards";

function Home() {
  const instagramEmbedCode = `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C2Pj7hYgaOW/?igsh=MTZ5bGpmaWZscG9uMA==" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:640px; min-width:426px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      <div class="instPost"> 
        <a href="https://www.instagram.com/p/C2Pj7hYgaOW/?igsh=MTZ5bGpmaWZscG9uMA==" className="instA"  target="_blank"> 
        </a>
      </div>
    </blockquote>
  `;

  useEffect(() => {
    AOS.init({
      duration: 2200,
      
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="parallax"></div>
      <div className="content">
        <div className="parent">
          <div className="div1" data-aos="fade-up">
            <div className="InDiv1">
              <h1>
                ¡Tu Tranquilidad, Mi compromiso!
              </h1>
              
              <div className="instagram-embed" dangerouslySetInnerHTML={{ __html: instagramEmbedCode }} />
            </div>
          </div>
          <div className="div2" data-aos="fade-right">
            <img
              src={denkoImage}
              alt="Denko Swoboda"
              className="denkoImage"
            />
          </div>
        </div>
        <HeroSection  />
        <div className="div3" data-aos="fade-down">
          <div className="subDiv3">
            <img src={familyImage} alt="" />
            <p className="pieFoto">Foto de Liam Anderson</p>
          </div>
          <Form className="formulario" />
        </div>
        <ServicesCards />
      </div>
    </>
  );
}

export default Home;