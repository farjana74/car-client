import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Choice.css';

const Choice = () => {
  return (
    <div className="shadow-lg  choice">


      <div className="container py-3">
        <h2 className="text-center service-title my-5">Why Usd</h2>

        <div className='row row-cols-1 row-cols-sm-1  row-cols-lg-3 gx-4 '>

          <div className='col choice-card p-3 '>
            <h2 className="text-center"> <i class="fab fa-amazon-pay center"></i></h2>
            <h1 className="text-center py-2 fs-4">Secured Payment Guarantee</h1>
            <h5 className="text-center fs-6">Our payment system is very hight and i also
              our customer</h5>
          </div>

          <div className='col choice-card p-4'>
            <h2 className="text-center"> <i class="fas fa-hand-holding-medical center"></i></h2>
            <h1 className="text-center fs-4 py-3 ">Help Center & Support 24/7</h1>
            <h5 className="text-center fs-6">Our payment system is very hight and i also
              our customer</h5>

          </div>
          <div className='col choice-card p-4'>
            <h2 className="text-center"><i class="fas fa-car-alt center"></i></h2>
            <h1 className="text-center py-3 fs-4">Booking any Class Vehicles</h1>
            <h5 className="text-center fs-6">Our payment system is very hight and i also
              our customer</h5>

          </div>




        </div>

      </div>
    </div>


  );
};

export default Choice;