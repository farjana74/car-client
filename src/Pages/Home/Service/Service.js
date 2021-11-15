import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({cars}) => {
    const{name,img,price,description,_id}=cars
    return (
        
        <Col>       
        <Card className="shadow show">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fs-3 fw-bold">{name}</Card.Title>
          <Card.Text className=" fst-italic fs-5">
            {description}
          </Card.Text>
          <h5>${price}</h5>
          <Link to={`/booking/${_id}`}>
          <Button variant="" className="shadow
          buttons text-white" size="lg">
      Book now
    </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col> 
    
    );
};

export default Service;
