import React from "react";

import About from "../sections/About";
import Testimonial from "../sections/Testimonial";
import Contact from "../sections/Contact";
import Blogs from "../sections/Blogs";
import Brands from "../sections/Brands";
import Header from "../sections/Header";
import Nav from "../components/Nav";

function Home({ data }) {
  return (
    <>
      <Header />
      <Nav />

      <div className='clearfix'>...</div>
      <About />
      <Testimonial data={data.testimonials} />
      <Contact />
      <Blogs data={data.blog} />
      <Brands data={data.brands} />
      <div className='clearfix'>...</div>
    </>
  );
}

export default Home;
