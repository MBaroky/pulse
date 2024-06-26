import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavData = [
  { title: "About pulse", link: "/about" },
  { title: "How It Works", link: "/how-it-works" },
  { title: "Rewards", link: "/rewards" },
  { title: "Cooperates", link: "/cooperates" },
];

function Nav({ className, style }) {
  return (
    <div
      id='main-nav-sticky'
      className={`container  py-5 sticky-top ${className}`}
      style={style}>
      <nav
        className='navbar navbar-expand-md navbar-light rounded-pill px-3  shadow-sm'
        style={{ background: "rgba(255,255,255,0.8)" }}>
        <div className='container-fluid text-left justify-content-start'>
          <Link className='navbar-brand rounded-pill ' to='/'>
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
            className='collapse navbar-collapse nav navbar-nav flex-nowrap bg-light bg-md-transparent'>
            {NavData.map((item, index) => (
              <li key={index} className='nav-item text-dark'>
                <NavLink
                  className='text-nowrap nav-link rounded-pill ms-1 px-2'
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
