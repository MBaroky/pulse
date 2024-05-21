import React from "react";

import About from "../sections/About";
import Testimonial from "../sections/Testimonial";
import Contact from "../sections/Contact";
import Blogs from "../sections/Blogs";
import Brands from "../sections/Brands";
import Header from "../sections/Header";
import Nav from "../components/Nav";

import blogData from "../blog.json";

function Home({ data }) {
  return (
    <>
      <Header />
      <Nav />

      <div className='clearfix'>...</div>
      <About />
      <Testimonial data={data.testimonials} />
      <Contact parent='home'>
        <div className='row mb-3 align-items-center'>
          <div className='col d-flex flex-column flex-lg-row'>
            <h1 className='text-nowrap me-5'>Contact Us!</h1>
            <p className='main mt-5'>
              Follow our journey, share your thoughts, and be part of
              the conversation. Your connection matters, and we look
              forward to building meaningful relationships with you.
            </p>
          </div>
        </div>
      </Contact>
      <Blogs data={blogData.posts} />
      <Brands data={data.brands} />
      <div className='clearfix'>...</div>
    </>
  );
}

export default Home;
