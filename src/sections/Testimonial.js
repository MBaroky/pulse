import React from "react";
import TestimonialItem from "../components/TestimonialItem";

function Testimonial() {
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
            <button className='btn rounded-pill px-4 py-2 btn-md bg-light float-end medium-font shadow'>
              Discover More
            </button>
          </div>
        </div>
        <div className='row' id='testmonials-wrapper'>
          <TestimonialItem />
        </div>
        <div className='spacer' style={{ height: "100px" }}></div>
      </div>

      <hr className='container mt-5 mb-0' />
    </section>
  );
}

export default Testimonial;
