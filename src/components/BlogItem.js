import React from "react";

function BlogItem({ data }) {
  const { post_title, post_content, post_img } = data;
  return (
    <div className='col-lg-4 d-flex'>
      <div className='card mb-4 p-5 border border-2 blog-item d-flex flex-column justify-content-between isolate'>
        <p className='card-title'>
          <strong>{post_title ? post_title : ""}</strong>
        </p>
        <p>
          <small>{post_content ? post_content : ""}</small>
        </p>
        <div className='item-footer card-img-bottom pt-1'>
          <img
            style={{ width: "100%" }}
            className='img-fluid ratio-16x9 '
            src={post_img}
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
