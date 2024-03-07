import React from "react";

import LogoCover from "../assets/img/logo-cover.png";

function Header() {
  return (
    <header
      id='cover'
      className='grad-bg py-5'
      style={{ minHeight: "350px" }}>
      <div className='container'>
        <div id='top-bar' className='row'>
          <div className='col-md-6'>
            <p className='main'>
              A dynamic platform designed for conducting surveys{" "}
              <br />
              and gathering responses.
            </p>
          </div>
          <div className='col-md-6'>
            <button className='btn rounded-pill px-4 py-2 btn-md bg-light float-end medium-font shadow'>
              Say hi don’t be shy
            </button>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row text-center'>
          <div className='col-md-12'>
            <div id='cover-logo'>
              <img
                src={LogoCover}
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
    </header>
  );
}

export default Header;
