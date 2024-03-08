import React from "react";

function BlogItem({ data }) {
  const { heading, desc, imgUrl } = data;
  return (
    <div className='col-lg-4 d-flex'>
      <div className='card mb-4 p-5 border border-2 blog-item d-flex flex-column justify-content-between isolate'>
        <p className='card-title'>
          <strong>{heading ? heading : ""}</strong>
        </p>
        <div className='item-footer card-img-bottom pt-1'>
          <p>
            <small>{desc ? desc : ""}</small>
          </p>
          <img
            style={{ width: "100%" }}
            className='img-fluid'
            src={imgUrl}
            alt='blog'
          />
          <button className='btn rounded-pill mt-3 px-4 py-2 btn-md bg-light float-end medium-font shadow'>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
