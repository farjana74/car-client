import React from 'react';
import review1 from '../../../images/reviewer-1.png'
import r1 from '../../../images/img_04 (2).jpg'
import r2 from '../../../images/img_05 (2).jpg'
import r3 from '../../../images/img_06 (2).jpg'

const ShowReview = ({rw}) => {
    const{name,description}=rw;
    return (
       <div>
            <div className=" align-items-center d-flex">
  <div>
    <img src={review1} className="me-5" alt="" />
  </div>
  <div>
<h2>{name}</h2>
  </div>
</div>
<h5 className="my-3">“{description}”

</h5>


<div className="row my-5">
  <div className="col-md-3">
    <img src={r1} className="w-100" alt="" />
  </div>
  <div className="col-md-3">
  <img src={r2} className="w-100" alt="" />
  </div>
  <div className="col-md-3">
  <img src={r3} className="w-100" alt="" />
  </div>
</div>
       </div>
    );
};

export default ShowReview;

