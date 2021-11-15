import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './../Service/Service';

const Services = () => {
    const[car,setCar]=useState([])
   useEffect(()=>{
       fetch('https://young-gorge-80259.herokuapp.com/services')
       .then(res=>res.json())
       .then(data=>setCar(data))
   },[])
    return (
       <div className="container my-5">
           <h3 className="text-center text-primary my-5 fs-1 fw-bold fst-italic">Our most imported car</h3>
            <Row xs={1} md={3} className="g-4">
           {
               car.slice(0,6).map(cars=><Service
               key={cars.id}
               cars={cars}
               
               ></Service>)
           }
</Row>
       </div>
    );
};

export default Services;

