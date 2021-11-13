import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './../Service/Service';

const Services = () => {
    const[car,setCar]=useState([])
   useEffect(()=>{
       fetch('http://localhost:5000/services')
       .then(res=>res.json())
       .then(data=>setCar(data))
   },[])
    return (
       <div className="container my-5">
           <h3 className="text-center text-primary">Our most imported car</h3>
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



// {Array.from({ length: 4 }).map((_, idx) => (
//     <Col>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}