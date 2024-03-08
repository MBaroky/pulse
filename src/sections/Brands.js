import React from "react";

function Brands({ data }) {
  return (
    <section id='brands' className=' py-5 mb-5'>
      <div className='container-fluid'>
        <p className='text-center'>
          <strong>Trusted Brands</strong>
        </p>
        <div className='row'>
          {data
            ? data.map(item => (
                <div className='col-md col-3 justify-content-center d-flex align-items-center'>
                  <img
                    className='img-fluid'
                    src={item.url}
                    alt='brands'
                  />
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </section>
  );
}

export default Brands;
