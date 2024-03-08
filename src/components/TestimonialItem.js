import React from "react";

function TestimonialItem() {
  return (
    <div className='col-md-6 p-5 border border-2 test-item card'>
      <p className='card-title'>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Amet magni deserunt aliquam iusto officia eveniet dicta
          doloribus dolor nobis quo inventore quos, neque architecto
          fuga. Reprehenderit ducimus dolor non aliquam.
        </small>
      </p>
      <div className='item-footer card-img-bottom pt-5'>
        <p>
          <small>
            <strong>John Smith</strong> <br />
            Marketing Manager
          </small>
        </p>
      </div>
    </div>
  );
}

export default TestimonialItem;
