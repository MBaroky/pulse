import React from "react";
import Logo from "../assets/img/logo-small.png";

function Nav() {
  return (
    <div
      id='main-nav-sticky'
      className='container py-5 mt-3 sticky-top'>
      <nav className='navbar navbar-light bg-light rounded-pill px-3'>
        <div className='container-fluid text-left'>
          <a className='navbar-brand' href='#'>
            <img src={Logo} alt='logo-nav' className='img-fluid' />
          </a>
          <ul className='nav d-flex flex-nowrap'>
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
