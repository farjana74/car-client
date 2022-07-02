import React from 'react';
import review1 from '../../../images/reviewer-1.png'
import './ShowReview.css'

import { Card, Col } from 'react-bootstrap';
import './ShowReview.css'
import Rating from 'react-rating';
import Slider from "react-slick";

const ShowReview = ({ rw }) => {
  const { name, img, email, description, rating } = rw;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (

    <div class="col ">
      <Card className="shadow rounded cards p-3">
        <Card.Img variant="top" className="w-50 img mx-auto " src={img} />
        <Card.Body>
          <Card.Title className="fs-6 text-muted fw-bold">{email}</Card.Title>


          <Card.Text className=" fst-italic fs-6 py-2">
            {description.slice(0, 50)}

          </Card.Text>
          <div className='d-flex align-items-center justify-content-between '>
            <div>
              <h5 className="fs-6">{name}</h5>
            </div>

            <div>
              <Rating className="star-rating text-danger"
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star"
                initialRating={rating}
                readonly

              />
            </div>
          </div>

        </Card.Body>
      </Card>
    </div>
    // <div className=" ">


    // <Col className=" ">
    //   <Card className="shadow rounded cards">
    //     <Card.Img variant="top" className="w-50 img " src={img} />
    //     <Card.Body>
    //       <Card.Title className="fs-5 text-muted fw-bold">{email}</Card.Title>

    //       <h5 className="fs-6">{name}</h5>
    //       <Rating className="star-rating"
    //         emptySymbol="fa fa-star-o "
    //         fullSymbol="fa fa-star"
    //         initialRating={rating}
    //         readonly

    //       />
    //       <Card.Text className=" fst-italic fs-5">
    //         {description}

    //       </Card.Text>

    //     </Card.Body>
    //   </Card>
    // </Col>

    // </div>

  );
};

export default ShowReview;

