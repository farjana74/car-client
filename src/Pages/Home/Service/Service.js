import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({cars}) => {
    const{name,img,price,description,_id}=cars
    return (
        
        <Col>       
        <Card className="shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <h5>${price}</h5>
          <Link to={`/booking/${_id}`}>
          <Button variant="primary" size="lg">
      Book now
    </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col> 
    
    );
};

export default Service;
