import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavData = [
  { title: "About pulse", link: "/about" },
  { title: "How It Works", link: "/how-it-works" },
  { title: "Rewards", link: "/rewards" },
  { title: "Corporate", link: "corporate" },
];

function Nav() {
  return (
    <div
      id='main-nav-sticky'
      className='container py-5 mt-3 sticky-top'>
      <nav className='navbar navbar-expand-md navbar-light bg-light rounded-pill px-3 '>
        <div className='container-fluid text-left justify-content-start'>
          <Link className='navbar-brand' to='/'>
            <img
              src='assets/img/logo-small.png'
              alt='logo-nav'
              className='img-fluid'
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#main-nav'
            aria-controls='main-nav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <ul
            id='main-nav'
            className='collapse navbar-collapse nav navbar-nav flex-nowrap bg-light'>
            {NavData.map((item, index) => (
              <li className='nav-item text-dark'>
                <NavLink
                  className='text-nowrap nav-link'
                  aria-current='page'
                  to={item.link}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
