'use client';
import { FaAngular, FaReact, FaPython, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { SiRubyonrails } from 'react-icons/si';
import '../../styles/Banner.css';
import React from 'react';

import "react-circular-progressbar/dist/styles.css";

import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Carousel () {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const icons = [
    FaHtml5,
    FaCss3Alt,
    BiLogoJavascript,
    BiLogoTypescript,
    FaAngular, 
    FaReact,
    FaPython,
    SiRubyonrails,
    FaPhp
  ];

  const skills = [
    { name: 'Database', rating: 85 },
    { name: 'Front-end', rating: 90 },
    { name: 'Back-end', rating: 80 },
    { name: 'Stylization', rating: 75 }
  ];

  return (
    <>
      <ReactCarousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1500}
        pauseOnHover={false}
        className="owl-carousel owl-theme banner-carousel">
        {
          icons.map((icon, index) => (
            <div className="banner-carousel-item">
              { icon && React.createElement(icon, { className: 'banner-carousel-icon' }) }
            </div>
          ))
        }
      </ReactCarousel>
    </>
  )
}