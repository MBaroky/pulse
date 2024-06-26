import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      id='cover'
      className='grad-bg pt-5 pb-0 isolate'
      style={{ minHeight: "350px" }}>
      <div className='container'>
        <div id='top-bar' className='row'>
          <div className='col-md-6'>
            <p className='main'>
              <small>
                A dynamic platform designed for conducting surveys{" "}
                <br />
                and gathering responses.
              </small>
            </p>
          </div>
          <div className='col-md-6'>
            <Link
              className='btn rounded-pill px-4 py-2 btn-md bg-light float-end medium-font shadow'
              to='contact'>
              Say hi don’t be shy
            </Link>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row text-center'>
          <div className='col-md-12'>
            <div id='cover-logo'>
              <img
                src='assets/img/logo-cover.png'
                alt='logo-cover'
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container py-5 mt-5'>
        <span className='spacer' style={{ height: "100px" }}></span>
      </div>

      <hr className='container mt-5 mb-0' />
    </header>
  );
}

export default Header;
