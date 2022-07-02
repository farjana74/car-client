import React, { useEffect } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = ({ cars }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  const { name, img, price, description, _id } = cars
  return (

    <Col>
      <Card data-aos="fade-up" className="shadow show">
        <Card.Img className='show-img' variant="top" src={img} />
        <Card.Body>
          <Card.Title className=" fw-bold service-header">{name}</Card.Title>
          <Card.Text className=" fst-italic service-description ">
            {description.slice(0, 70)}
          </Card.Text>
          <h5 className='service-price'>${price}</h5>
          <Link to={`/booking/${_id}`}>
            <Button variant="" className="shadow
          buttons text-white fs-6" >
              Book now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>

  );
};

export default Service;
