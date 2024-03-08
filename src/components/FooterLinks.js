import React from "react";

function FooterLinks({ id, data }) {
  return (
    <p className='text-light mb-lg-0'>
      <strong>{data ? data[id].title : "heading 1"}</strong>
      <small>
        <ul className='list-unstyled text-light  mb-lg-0 lh-lg mt-2'>
          {data
            ? data[id].links.map(link => (
                <li>
                  <a className=' text-light' href=''>
                    {link}
                  </a>
                </li>
              ))
            : "loading"}
        </ul>
      </small>
    </p>
  );
}

export default FooterLinks;
