import React from "react";

function Contact() {
  return (
    <section id='contact' className='py-5'>
      <div className='container'>
        <div className='row mb-3 align-items-center'>
          <div className='col d-flex flex-column flex-lg-row'>
            <h1 className='text-nowrap me-5'>Contact Us!</h1>
            <p className='main mt-5'>
              Engage, interact, and stay updated! Connect with us to
              join a vibrant community of like-minded individuals.
              Follow our journey, share your thoughts, and be part of
              the conversation. Your connection matters, and we look
              forward to building meaningful relationships with you.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col card p-5 isolate'>
            <div className='row'>
              <form action='' className='col'>
                <div className='py-3'>
                  <input
                    name='name'
                    type='text'
                    className='form-control px-0 pb-3'
                    id='name'
                    placeholder='Full name'
                  />
                </div>
                <div className='py-3'>
                  <input
                    name='email'
                    type='email'
                    className='form-control px-0 pb-3'
                    id='email'
                    placeholder='Email'
                  />
                </div>
                <div className='py-3'>
                  <textarea
                    name='message'
                    className='form-control px-0 pb-3'
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

      <hr className='container mt-5 mb-0' />
    </section>
  );
}

export default Contact;
