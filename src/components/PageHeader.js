import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function PageHeader({ heading, desc, children, mb }) {
  const borderSize = "3px";
  const borderColor = "#000";
  return (
    <>
      <Nav
        className='float-start py-0 d-inline-block w-auto mt-2'
        style={{ marginTop: "-3rem", marginBottom: "-3rem" }}
      />
      <header
        id='cover'
        className='grad-bg isolate'
        style={{
          minHeight: "350px",
          zIndex: 2,
          position: "relative",
          marginBottom: " -3rem",
        }}>
        {/* first row with the button */}
        <div className='clearfix'>...</div>
        <div className='container'>
          <div id='top-bar' className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6'>
              <Link
                className='btn rounded-pill px-4 py-2 btn-md bg-light float-end medium-font shadow'
                to='/contact'>
                Say hi don’t be shy
              </Link>
            </div>
          </div>
        </div>

        <div className='container mb-3'>
          <div className='row'>
            <div className='col d-flex flex-column'>
              <h1
                className='text-center text-white mb-5'
                style={{
                  textShadow: `16px 16px 0px ${borderColor}, ${borderSize} 0px 0px ${borderColor}, -${borderSize} 0px 0px ${borderColor}, 0px ${borderSize} 0px ${borderColor}, 0px -${borderSize} 0px ${borderColor}, ${borderSize} -${borderSize} 0px ${borderColor}, -${borderSize} ${borderSize} 0px ${borderColor}, ${borderSize} ${borderSize} 0px ${borderColor}, -${borderSize} -${borderSize} 0px ${borderColor}`,
                  fontSize: "6rem",
                }}>
                {heading}
              </h1>
              {desc ? (
                <p className='text-center'>{desc}</p>
              ) : (
                children
              )}
            </div>
          </div>
          <div className={`spacer ${mb ? mb : ""}`}></div>
        </div>
        <div className='clearfix'>...</div>
        <hr className={`container mt-5 ${mb ? mb : ""}`} />
      </header>
    </>
  );
}

export default PageHeader;
