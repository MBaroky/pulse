import React from "react";
import { Link } from "react-router-dom";

import Contact from "../sections/Contact";
// import Nav from "../components/Nav";

function ContactPage() {
  const borderSize = "3px";
  const borderColor = "#000";
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
              <Link to='/' className='text-decoration-none '>
                /Back Home
              </Link>
            </div>
            <div className='col-md-6'></div>
          </div>
        </div>

        <div className='container mb-3'>
          <div className='row'>
            <div className='col d-flex flex-column'>
              <h1
                className='text-center text-white my-5'
                style={{
                  textShadow: `16px 16px 0px ${borderColor}, ${borderSize} 0px 0px ${borderColor}, -${borderSize} 0px 0px ${borderColor}, 0px ${borderSize} 0px ${borderColor}, 0px -${borderSize} 0px ${borderColor}, ${borderSize} -${borderSize} 0px ${borderColor}, -${borderSize} ${borderSize} 0px ${borderColor}, ${borderSize} ${borderSize} 0px ${borderColor}, -${borderSize} -${borderSize} 0px ${borderColor}`,
                  fontSize: "6rem",
                }}>
                Say hi don’t be shy
              </h1>
            </div>
            <Contact className='grad-bg' />
          </div>
        </div>
        <div className='clearfix'>...</div>
      </header>
    </>
  );
}

export default ContactPage;
