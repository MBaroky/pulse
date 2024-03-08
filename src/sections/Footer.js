import React from "react";
import FooterLinks from "../components/FooterLinks";

function Footer({ social, links }) {
  return (
    <footer className='mt-5'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg col-6 d-flex align-items-center'>
            <FooterLinks id={0} data={links} />
          </div>
          <div className='col-lg col-6 d-flex align-items-center'>
            <FooterLinks id={1} data={links} />
          </div>
          <div className='col-lg-4 col-12 order-first order-lg-0 text-center'>
            <img
              id='footer-logo'
              src='assets/img/logo-footer.png'
              alt='logo'
              className='img-fluid mb-5'
            />
            <ul className='list-inline d-flex justify-content-center'>
              {social
                ? social.map(icon => (
                    <li key={icon.id} className='px-1'>
                      <a href=''>
                        <img
                          src={icon.url}
                          alt=''
                          className='img-fluid'
                        />
                      </a>
                    </li>
                  ))
                : "loading"}
            </ul>
          </div>
          <div className='col-lg col-6 d-flex align-items-center'>
            <FooterLinks id={2} data={links} />
          </div>
          <div className='col-lg col-6 d-flex align-items-center'>
            <FooterLinks id={3} data={links} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
