import React from "react";
import TestimonialItem from "../components/TestimonialItem";
import { Link } from "react-router-dom";

function Testimonial({ data }) {
  const slides = [];
  data?.forEach(item => {
    if (!slides.includes(item.slide)) {
      slides.push(item.slide);
    }
  });
  return (
    <section id='testimonial'>
      <div className='container'>
        <div className='row mb-3 align-items-center'>
          <div className='col-md-9 d-flex flex-column flex-lg-row'>
            <h1 className='text-nowrap me-5'>Testimonials</h1>
            <p className='main mt-5'>
              See Why Our Users Love Using Pulse
            </p>
          </div>
          <div className='col-md-3'>
            <Link
              to='/testimonials'
              className='btn rounded-pill px-4 py-2 btn-md bg-light float-end medium-font shadow'>
              Discover More
            </Link>
          </div>
        </div>
        <div
          id='testCarousel'
          className='carousel slide pb-5 carouselWithIndicators'
          data-bs-ride='carousel'>
          <ol className='carousel-indicators'>
            {slides?.map((slide, index) => (
              <li
                key={index}
                data-bs-target='#testCarousel'
                data-bs-slide-to={index}
                className={`${index === 0 ? "active" : ""}`}></li>
            ))}
          </ol>
          <div className='carousel-inner'>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}>
                <div className='row' id='testmonials-wrapper'>
                  {data
                    ? data
                        .filter(item => item.slide === slide)
                        .map(item => (
                          <TestimonialItem
                            key={item.id}
                            data={item}
                          />
                        ))
                    : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className='container mt-5 mb-0' />
    </section>
  );
}

export default Testimonial;
