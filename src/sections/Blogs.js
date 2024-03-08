import React from "react";
import BlogItem from "../components/BlogItem";

function Blogs({ data }) {
  return (
    <section id='blogs'>
      <div className='container'>
        <div className='row mb-3 align-items-center'>
          <div className='col-md-9 d-flex flex-column flex-lg-row'>
            <h1 className='text-nowrap me-5'>Blogs</h1>
            <p className='main mt-5'>
              Explore our blogs for thought-provoking articles, expert
              perspectives, and the latest trends.
            </p>
          </div>
          <div className='col-md-3'>
            <button className='btn rounded-pill px-4 py-2 btn-md bg-light float-end medium-font shadow'>
              Discover More
            </button>
          </div>
        </div>
        <div
          id='blogsCarousel'
          className='carousel slide pb-5 carouselWithIndicators'
          data-bs-ride='carousel'>
          <ol className='carousel-indicators'>
            <li
              data-bs-target='#blogsCarousel'
              data-bs-slide-to='0'
              className='active'></li>
            <li
              data-bs-target='#blogsCarousel'
              data-bs-slide-to='1'></li>
            <li
              data-bs-target='#blogsCarousel'
              data-bs-slide-to='2'></li>
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='row' id='testmonials-wrapper'>
                {data
                  ? data.map(item => (
                      <BlogItem key={item.id} data={item} />
                    ))
                  : ""}
              </div>
            </div>
            <div className='carousel-item'>
              <div className='row' id='testmonials-wrapper'>
                {data
                  ? data.map(item => (
                      <BlogItem key={item.id} data={item} />
                    ))
                  : ""}
              </div>
            </div>
            <div className='carousel-item'>
              <div className='row' id='testmonials-wrapper'>
                {data
                  ? data.map(item => (
                      <BlogItem key={item.id} data={item} />
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='container mt-5 mb-0' />
    </section>
  );
}

export default Blogs;
