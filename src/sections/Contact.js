import React from "react";

function Contact({ children, className, parent }) {
  return (
    <section id='contact' className={` ${parent ? "py-5" : ""}`}>
      <div className='container'>
        {children}
        <div className='row'>
          <div className={`col card p-5 isolate ${className}`}>
            <div className='row'>
              <form action='' className={` col`}>
                <div className='py-3'>
                  <input
                    name='name'
                    type='text'
                    className='form-control px-0 pb-3 bg-transparent '
                    id='name'
                    placeholder='Full name'
                  />
                </div>
                <div className='py-3'>
                  <input
                    name='email'
                    type='email'
                    className='form-control px-0 pb-3 bg-transparent '
                    id='email'
                    placeholder='Email'
                  />
                </div>
                <div className='py-3'>
                  <textarea
                    name='message'
                    className='form-control px-0 pb-3 bg-transparent '
                    id='message'
                    placeholder='Message'
                    rows={3}
                  />
                </div>

                <button
                  type='submit'
                  className='btn rounded-pill px-4 py-2 btn-md bg-light float-start medium-font shadow'>
                  Submit
                </button>
              </form>
              <div className='col-md-3 d-none d-md-inline'></div>
              <div
                className='d-none d-md-inline bg-wrapper'
                style={{
                  backgroundImage: "url(assets/img/contact.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "right bottom",
                  backgroundRepeat: "no-repeat",
                  width: "25%",
                  height: "100%",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  maxWidth: "250px",
                }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className='spacer' style={{ height: "50px" }}></div>
      {parent ? <hr className='container mt-5 mb-0' /> : <></>}
    </section>
  );
}

export default Contact;
