import React from "react";
import LogoSlider from "../components/LogoSlider";

function Brands({ data }) {
  return (
    <section
      id='brands'
      className=' py-5 mb-5'
      style={{ overflowX: "hidden" }}>
      <div className='container-fluid'>
        <div className='row'>
          <p className='text-center'>
            <strong>Trusted Brands</strong>
          </p>
          <div className='col'>
            {data ? <LogoSlider logos={data} /> : "loading"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
