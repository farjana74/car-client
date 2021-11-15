import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Choice.css';

const Choice = () => {
    return (
        <div className="container  choice">


<div className="container p-3">
            <h2 className="text-center text-primary my-5">Why Usd</h2>
           
           <Row className="my-5 mx-auto text fst-italic">
    <Col xs={12} md={4}>
   <h2 className="text-center"> <i class="fab fa-amazon-pay center"></i></h2>
    <h1  className="text-center fs-3">Secured Payment Guarantee</h1>
    <h5  className="text-center">Our payment system is very hight and i also 
    our customer</h5>
    </Col>
    <Col xs={12} md={4} >
    <h2 className="text-center"> <i class="fas fa-hand-holding-medical center"></i></h2>
    <h1  className="text-center fs-3 ">Help Center & Support 24/7</h1>
    <h5  className="text-center">Our payment system is very hight and i also 
    our customer</h5>
    </Col>
    <Col xs={12} md={4} >
    <h2 className="text-center"><i class="fas fa-car-alt center"></i></h2>
    <h1  className="text-center fs-3">Booking any Class Vehicles</h1>
    <h5  className="text-center">Our payment system is very hight and i also 
    our customer</h5>
    </Col>
  </Row>
           <Row className="mx-auto text fst-italic">
    <Col xs={12} md={4} >
    <h2 className="text-center"><i class="fab fa-acquisitions-incorporated center"></i></h2>
    <h1 className="text-center fs-3">Corporate and Business Services</h1>
    <h5 className="text-center">Our payment system is very hight and i also 
    our customer</h5>
    </Col>
    <Col xs={12} md={4} >
    <h2 className="text-center"> <i class="fas fa-shuttle-van center"></i></h2>
    <h1  className="text-center fs-3">Car Sharing Options</h1>
    <h5  className="text-center">Our payment system is very hight and i also 
    our customer</h5>
    </Col>
    <Col xs={12} md={4} >
    <h2 className="text-center"><i class="fas fa-shield-alt center"></i></h2>
    <h1  className="text-center fs-3">Limousine and Chauffeur Hire</h1>
    <h5  className="text-center">Our payment system is very hight and i also 
    our customer</h5>
    </Col>
  </Row>
           </div>
        </div>
    
    );
};

export default Choice;