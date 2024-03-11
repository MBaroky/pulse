import React from "react";
import LogoSlider from "../components/LogoSlider";

function Brands({ data }) {
  return (
    <section
      id='brands'
      className=' py-5 mb-5'
      style={{ overflow: "hidden" }}>
      <div className='container-fluid pb-5'>
        <div className='row'>
          <p className='text-center mb-5'>
            <strong>Trusted Brands</strong>
          </p>
          <div id='slider-wrapper' className='col py-5'>
            <div className='slider-tiker-wrapper'>
              <div className='slider-tiker'>
                {data ? <LogoSlider logos={data} /> : "loading"}
              </div>
              <div className='slider-tiker'>
                {data ? <LogoSlider logos={data} /> : "loading"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
