import React from "react";

function FooterLinks({ id, data }) {
  return (
    <div>
      <p className='text-light mb-lg-0'>
        <strong>{data ? data[id].title : "heading 1"}</strong>
      </p>
      <ul className='list-unstyled text-light  mb-lg-0 lh-lg mt-2'>
        {data
          ? data[id].links.map((link, index) => (
              <li key={index}>
                <p className='text-light mb-lg-0'>
                  <small>
                    <a className=' text-light' href='/'>
                      {link}
                    </a>
                  </small>
                </p>
              </li>
            ))
          : "loading"}
      </ul>
    </div>
  );
}

export default FooterLinks;
