import React from "react";

function Nav() {
  return (
    <div
      id='main-nav-sticky'
      className='container py-5 mt-3 sticky-top'>
      <nav className='navbar navbar-expand-md navbar-light bg-light rounded-pill px-3 '>
        <div className='container-fluid text-left justify-content-start'>
          <a className='navbar-brand' href='#'>
            <img
              src='assets/img/logo-small.png'
              alt='logo-nav'
              className='img-fluid'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#main-nav'
            aria-controls='main-nav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <ul
            id='main-nav'
            className='collapse navbar-collapse nav navbar-nav flex-nowrap bg-light'>
            <li className='nav-item text-dark'>
              <a
                className='text-nowrap nav-link active'
                aria-current='page'
                href='#'>
                About pulse
              </a>
            </li>
            <li className='nav-item'>
              <a className='text-nowrap nav-link' href='#'>
                How It Works
              </a>
            </li>
            <li className='nav-item'>
              <a className='text-nowrap nav-link' href='#'>
                Rewards
              </a>
            </li>
            <li className='nav-item'>
              <a className='text-nowrap nav-link' href='#'>
                Cooperates
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
