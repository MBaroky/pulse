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
                Pulse is a dynamic platform designed for conducting
                surveys and gathering responses. Tailored for
                insightful market research and comprehensive data
                collection, Pulse empowers users to create,
                distribute, and analyze surveys with ease. Whether
                seeking feedback on products, gauging customer
                satisfaction, or exploring diverse opinions on various
                topics, Pulse serves as a versatile tool for
                businesses, organizations, and individuals looking to
                harness the collective pulse of their audience. With
                its user-friendly interface and robust analytics,
                Pulse ensures a seamless and efficient process for
                obtaining valuable insights and making informed
                decisions.
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
