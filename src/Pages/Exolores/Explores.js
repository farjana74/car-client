
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Explores = ({car}) => {
    const {name,img,price,description}=car
    return (
        <div>
          <Col>       
        <Card className="shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <h5>${price}</h5>
          <Button variant="primary" size="lg">
      Book now
    </Button>
        </Card.Body>
      </Card>
    </Col> 



   
        </div>
    );
};

export default Explores;