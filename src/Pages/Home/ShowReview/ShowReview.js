import React from 'react';
import review1 from '../../../images/reviewer-1.png'


import { Card, Col } from 'react-bootstrap';
import './ShowReview.css'

const ShowReview = ({rw}) => {
    const{name,img,email,description}=rw;
    return (
       <div className=" ">

<Col className=" ">       
        <Card className="shadow rounded cards">
        <Card.Img variant="top" className="w-50 img " src={img} />
        <Card.Body>
          <Card.Title className="fs-3 fw-bold">{email}</Card.Title>
          
          <h5>{name}</h5>
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

