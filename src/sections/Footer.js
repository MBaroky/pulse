import React from "react";

function Footer() {
  return (
    <footer className='mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex align-items-center'>
            <p className='text-light mb-0'>
              <strong>Pulse Surveys</strong>
              <small>
                <ul className='list-unstyled text-light  mb-0 lh-lg mt-2'>
                  <li>
                    <a className=' text-light' href=''>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className=' text-light' href=''>
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a className=' text-light' href=''>
                      Blog
                    </a>
                  </li>
                </ul>
              </small>
            </p>
          </div>
          <div className='col d-flex align-items-center'>
            <p className='text-light  mb-0'>
              <strong>Quick Links</strong>
              <small>
                <ul className='list-unstyled text-light  mb-0 lh-lg mt-2'>
                  <li>
                    <a className=' text-light' href=''>
                      Term of Membership
                    </a>
                  </li>
                  <li>
                    <a className=' text-light' href=''>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className=' text-light' href=''>
                      FAQ's
                    </a>
                  </li>
                </ul>
              </small>
            </p>
          </div>
          <div className='col-md-4 col text-center'>
            <img
              src='assets/img/logo-footer.png'
              alt='logo'
              className='img-fluid'
              style={{ transform: "translate(0,-50%)" }}
            />
            <ul className='list-inline d-flex justify-content-center'>
              <li>
                <a href=''>
                  <img
                    src='assets/img/icons-1.png'
                    alt=''
                    className='img-fluid'
                  />
                </a>
              </li>
              <li>
                <a href=''>
                  <img
                    src='assets/img/icons-2.png'
                    alt=''
                    className='img-fluid'
                  />
                </a>
              </li>
              <li>
                <a href=''>
                  <img
                    src='assets/img/icons-3.png'
                    alt=''
                    className='img-fluid'
                  />
                </a>
              </li>
              <li>
                <a href=''>
                  <img
                    src='assets/img/icons-4.png'
                    alt=''
                    className='img-fluid'
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className='col d-flex align-items-center'>
            <p className='text-light mb-0'>
              <strong>My Account</strong>
              <small>
                <ul className='list-unstyled text-light  mb-0 lh-lg mt-2'>
                  <li>
                    <a className=' text-light' href=''>
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a className=' text-light' href=''>
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a className=' text-light' href=''>
                      Cookie Settings
                    </a>
                  </li>
                </ul>
              </small>
            </p>
          </div>
          <div className='col d-flex align-items-center'>
            <p className='text-light mb-0'>
              <strong>Support</strong>
              <small>
                <ul className='list-unstyled text-light  mb-0 lh-lg mt-2'>
                  <li>
                    <a className=' text-light' href=''>
                      Support@Pulse.online
                    </a>
                  </li>
                  <li>
                    <a className=' text-light' href=''>
                      Box No. 44475, Dubai
                    </a>
                  </li>
                  <li>
                    <a className=' text-light' href=''>
                      866 361 5363
                    </a>
                  </li>
                </ul>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
