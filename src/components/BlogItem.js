import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ data }) {
  const { PUBLIC_URL } = process.env;
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
            src={`${PUBLIC_URL}/${post_img}`}
            alt='blog'
          />
          <Link
            to={`${PUBLIC_URL}/posts/${data.post_id}`}
            className='btn rounded-pill mt-3 px-4 py-2 btn-md bg-light float-end medium-font shadow'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
