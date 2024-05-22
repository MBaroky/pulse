import React from "react";
import { Link, useParams } from "react-router-dom";

import blogData from "../blog.json";

function PostPage() {
  const { PUBLIC_URL } = process.env;
  const { id } = useParams();
  const currentPost = blogData?.posts.filter(
    post => post.post_id === id
  )[0];
  return (
    <>
      {/* <Nav
        className='float-start py-0 d-inline-block w-auto '
        style={{ marginTop: "-3rem", marginBottom: "-3rem" }}
      /> */}
      <header>
        <div className='clearfix'>...</div>
        <div className='container'>
          <div id='top-bar' className='row'>
            <div className='col-md-6'>
              <Link to='/blog' className='text-decoration-none '>
                /Back To Blogs
              </Link>
            </div>
            <div className='col-md-6'>
              <Link
                className='btn rounded-pill px-4 py-2 btn-md float-end medium-font shadow'
                style={{ backgroundColor: "#e1e2fb" }}
                to='/contact'>
                Say hi don’t be shy
              </Link>
            </div>
          </div>
        </div>

        <div className='container mb-3 mt-5'>
          <div className='row'>
            <div className='col-md-8'>
              <img
                src={`${PUBLIC_URL}/${currentPost.post_img}`}
                alt=''
                className='img-fluid w-100 '
              />
              <h3 className='mt-3'>{currentPost.post_title}</h3>
              <p className='mt-3'>{currentPost.post_content}</p>
            </div>
            <div className='col-md-4'>
              <div className='row'>
                {blogData.posts
                  ?.filter(post => {
                    if (parseInt(id) + 4 < blogData.posts.length) {
                      return post.post_id > id;
                    } else {
                      return (
                        post.post_id > id ||
                        post.post_id <
                          parseInt(id) + 5 - blogData.posts.length
                      );
                    }
                  })
                  .map((post, index) => {
                    if (index < 4) {
                      return (
                        <div className='col-md-12 d-flex' key={index}>
                          <Link
                            className='mb-5 bg-transparent  text-decoration-none text-center text-black'
                            to={`${PUBLIC_URL}/posts/${post.post_id}`}>
                            <h6 className=''>{post.post_title}</h6>
                            <img
                              src={`${PUBLIC_URL}/${post.post_img}`}
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className='clearfix'>...</div>
      </header>
    </>
  );
}

export default PostPage;
