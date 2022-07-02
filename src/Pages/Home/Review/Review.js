import React, { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import './Review.css'
import { useEffect } from 'react';
import ShowReview from '../ShowReview/ShowReview';



const Review = () => {
  const [review, setReview] = useState([])
  useEffect(() => {
    fetch('https://young-gorge-80259.herokuapp.com/review')
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])
  return (


    <div className="container">
      <h2 className=" text-primary text-center fw-bold my-5 text   fst-italic">
        What Clients Say about Us
      </h2>
      <div className='row row-cols-1 row-cols-sm-1  row-cols-lg-3 g-4 g-lg-3'>
        {
          review.map(rw => <ShowReview
            rw={rw}

          ></ShowReview>)
        }
      </div>
      {/* <Row xs={1} md={2} className="g-4 ">
        {
          review.map(rw => <ShowReview
            rw={rw}

          ></ShowReview>)
        }
      </Row> */}

    </div>
























  );
};

export default Review;