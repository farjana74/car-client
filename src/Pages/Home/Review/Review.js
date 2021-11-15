import React, { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';

import review2 from '../../../images/reviewer-2.png'
import review3 from '../../../images/reviewer-3.png'

import './Review.css'
import { useEffect } from 'react';
import ShowReview from '../ShowReview/ShowReview';
const Review = () => {
  const [review,setReview]=useState([])
  useEffect(()=>{
    fetch('https://young-gorge-80259.herokuapp.com/review')
    .then(res=>res.json())
    .then(data=>setReview(data))
  },[])
    return (

<div className="container">
<h2 className=" text-primary text-center fw-bold my-5 text   fst-italic">
What Clients Say about Us
</h2>
<Row xs={1} md={2} className="g-4 ">
{
  review.map(rw=><ShowReview
  rw={rw}
  
  ></ShowReview>)
}
</Row>

</div>


















    
 
   

   

    );
};

export default Review;