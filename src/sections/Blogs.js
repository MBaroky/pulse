import React from "react";
import BlogItem from "../components/BlogItem";
import { Link } from "react-router-dom";

function Blogs({ data }) {
  return (
    <section id='blogs' className='mb-5'>
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
            <Link
              to='/blog'
              className='btn rounded-pill px-4 py-2 btn-md bg-light float-end medium-font shadow'>
              Discover More
            </Link>
          </div>
        </div>
        <div
          id='blogsCarousel'
          className='carousel slide pb-5 carouselWithIndicators'
          data-bs-ride='carousel'>
          <ol className='carousel-indicators'>
            {Array.apply(null, Array(Math.ceil(data.length / 3))).map(
              (value, index) => (
                <li
                  data-bs-target='#blogsCarousel'
                  data-bs-slide-to={index}
                  className={`${index === 0 ? "active" : ""}`}></li>
              )
            )}
          </ol>
          <div className='carousel-inner'>
            {Array.apply(null, Array(Math.ceil(data.length / 3))).map(
              (value, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  }`}>
                  <div className='row' id='testmonials-wrapper'>
                    {data
                      ? data
                          .slice(index * 3, index * 3 + 3)
                          .map(item => (
                            <BlogItem
                              key={item.post_id}
                              data={item}
                            />
                          ))
                      : ""}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
