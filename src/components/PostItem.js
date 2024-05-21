import React from "react";
import { Link } from "react-router-dom";

function PostItem({ item }) {
  return (
    <div key={item.post_id} className='col-md-4 mb-3 d-flex '>
      <div className='card border-0 bg-body-secondary p-3 post-item '>
        <div className='card-body'>
          <div className='card-title'>{item.post_title}</div>
          <div className='card-text mb-2'>{item.post_content}</div>
        </div>
        <div className='card-footer border-0 bg-transparent '>
          <img
            src={item.post_img}
            alt=''
            className='card-img-bottom ratio-16x9 '
          />
          <Link
            to=''
            className='btn rounded-pill mt-3 px-4 py-2 btn-md bg-light float-end medium-font shadow '>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
