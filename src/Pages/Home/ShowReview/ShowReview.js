import React from 'react';
import review1 from '../../../images/reviewer-1.png'
import './ShowReview.css'

import { Card, Col } from 'react-bootstrap';
import './ShowReview.css'
import Rating from 'react-rating';

const ShowReview = ({rw}) => {
    const{name,img,email,description,rating}=rw;
    return (
       <div className=" ">

<Col className=" ">       
        <Card className="shadow rounded cards">
        <Card.Img variant="top" className="w-50 img " src={img} />
        <Card.Body>
          <Card.Title className="fs-5 text-muted fw-bold">{email}</Card.Title>
          
          <h5 className="fs-6">{name}</h5>
          <Rating className="star-rating"
          emptySymbol="fa fa-star-o "
          fullSymbol="fa fa-star" 
          initialRating={rating}    
          readonly    
          
          />
          <Card.Text className=" fst-italic fs-5">
            {description}

          </Card.Text>

        </Card.Body>
      </Card>
    </Col> 

 </div>
    );
};

export default ShowReview;

