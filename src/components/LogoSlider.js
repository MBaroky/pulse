import React, { useState } from "react";
import Slider from "react-slick";

function LogoSlider({ logos }) {
  const [settings] = useState({
    dots: false,
    pauseOnHover: false,
    swipe: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 4000,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });
  // Your component logic
  return (
    <div className='logo-slider'>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className='d-flex p-2 justify-content-center'>
            <img src={logo.url} className='img-fluid' alt='logo' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LogoSlider;
