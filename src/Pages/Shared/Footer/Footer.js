import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/logo_02_1x.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid footers">
            <div className="container ">
                <Row className="my-5 mx-auto text-primary">
                    <Col xs={12} md={5} className="text-white">
                        <img className="my-5" src={logo} alt="" />
                        <h5 className='fs-6'>Cras sit amet mi non orci pretium consectetur. Donec iaculis ante ac sollicitudin luctus. Phasellus ut lacus lacus. Phasellus sagittis ex id tortor tincidunt luctus. Donec consectetur consequat bibendum</h5>
                        <ul>
                            <li>Rental information</li>
                            <li>Faq</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className="text-white">
                        <h2 className="my-5 fs-4">Contact us</h2>
                        <h4 className='fs-6' >Main Office Address:</h4>
                        <h5 className='fs-6'>
                            Unit 9, Manor Industrial Estate, Lower Wash Lane, Warrington, WA4</h5>
                        <h6 className="my-2 fs-6"> 8:00am-9:30pm</h6>
                        <h5 className='fs-6'> rotorseml@eml.fr</h5>
                        <h5 className='fs-6'> +880 1680 6361 89</h5>
                    </Col>
                    <Col xs={12} md={3} className="text-white " >
                        <h2 className="my-5 fs-4">Information</h2>
                        <h4 className='fs-6'>Find a car nearest location</h4>
                        <h4 className='fs-6'>Cataloug</h4>
                        <h4 className='fs-6'>FAQ</h4>
                        <h4 className='fs-6'>ABout us</h4>
                        <h4 className='fs-6'>Contact us</h4>
                        <h4 className='fs-6'>Help center</h4>


                    </Col>
                </Row>
            </div>
            <div className="last-footer container-fluid bg-black py-4 text-white">
                <h3 className="text-center fs-5 ">Copyright ?? 2020. Rotors by Merkulove</h3>
            </div>
        </div>
    );
};

export default Footer;