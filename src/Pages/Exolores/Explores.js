
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explores = ({car}) => {
    const {name,img,price,description,_id}=car
    return (
        <div>
          <Col>       
        <Card className="shadow show">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fs-3 fw-bold" >{name}</Card.Title>
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



   
        </div>
    );
};

export default Explores;