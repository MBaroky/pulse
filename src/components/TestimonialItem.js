import React from "react";

function TestimonialItem({ data }) {
  const { desc, name, title, bgImg } = data;
  return (
    <div className={`${bgImg ? "col-md-6" : "col-lg-4"} d-flex`}>
      <div
        className='card mb-4 p-5 border border-2 test-item d-flex flex-column justify-content-between'
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "right bottom",
          backgroundSize: "auto 50%",
          backgroundRepeat: "no-repeat",
        }}>
        <p className='card-title'>
          <small>{desc ? desc : ""}</small>
        </p>
        <div className='item-footer card-img-bottom pt-5'>
          <p>
            <small>
              <strong>{name ? name : "John Smith"}</strong> <br />
              {title ? title : "Marketing Manager"}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
