import React from "react";
import Nav from "./Nav";

function PageHeader({ heading, desc, children }) {
  const borderSize = "3px";
  const borderColor = "#000";
  return (
    <>
      <header
        id='cover'
        className='grad-bg pt-5 isolate'
        style={{
          minHeight: "350px",
          zIndex: 2,
          position: "relative",
          marginBottom: " -3rem",
        }}>
        <Nav className='float-start py-0 d-inline-block ' />
        <button className='btn rounded-pill px-4 py-2 btn-md bg-light float-end medium-font shadow'>
          Say hi don’t be shy
        </button>
        {/* first row with the button */}
        <div className='clearfix'>...</div>
        {/* <div className='container'>
          <div id='top-bar' className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6'>
            </div>
          </div>
        </div> */}

        <div className='container mb-3'>
          <div className='row'>
            <div className='col d-flex flex-column'>
              <h1
                className='text-center text-white mb-5'
                style={{
                  textShadow: `16px 16px 0px ${borderColor}, ${borderSize} 0px 0px ${borderColor}, -${borderSize} 0px 0px ${borderColor}, 0px ${borderSize} 0px ${borderColor}, 0px -${borderSize} 0px ${borderColor}, ${borderSize} -${borderSize} 0px ${borderColor}, -${borderSize} ${borderSize} 0px ${borderColor}, ${borderSize} ${borderSize} 0px ${borderColor}, -${borderSize} -${borderSize} 0px ${borderColor}`,
                  fontSize: "120px",
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
          <div className='spacer' style={{ height: "100px" }}></div>
        </div>

        <hr className='container mt-5 mb-5' />
      </header>
    </>
  );
}

export default PageHeader;
