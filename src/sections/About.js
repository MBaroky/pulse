import React from "react";

function About() {
  return (
    <section id='about' className='py-5'>
      <div className='container mb-3'>
        <div className='row'>
          <div className='col d-flex flex-column flex-lg-row'>
            <h1 className='text-nowrap me-5'>About Pulse</h1>
            <div id='about-text'>
              <p className='main mt-5'>
                We specialize in assisting brands in acquiring
                targeted, engaged, and effective Personally
                Identifiable Information (PII) data more efficiently
                and on a large scale. Our innovative technology
                ecosystem guarantees that brands receive the utmost
                scale and caliber of leads in a streamlined and
                compliant manner.
              </p>
              <button className='btn rounded-pill px-4 py-2 btn-md bg-light medium-font shadow'>
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className='spacer' style={{ height: "100px" }}></div>
      </div>

      <hr className='container mt-5 mb-0' />
    </section>
  );
}

export default About;
