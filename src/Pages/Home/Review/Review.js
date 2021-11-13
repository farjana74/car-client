import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import review2 from '../../../images/reviewer-2.png'
import review3 from '../../../images/reviewer-3.png'

import './Review.css'
import { useEffect } from 'react';
import ShowReview from '../ShowReview/ShowReview';
const Review = () => {
  const [review,setReview]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res=>res.json())
    .then(data=>setReview(data))
  },[])
    return (

<div className="container">
<h2 className=" text-primary text-center fw-bold my-5">
What Clients Say about Us:{review.length}
</h2>
{
  review.map(rw=><ShowReview
  rw={rw}
  
  ></ShowReview>)
}


</div>


















//         <div className="container my-5">
           
//            <h2 className="text-center text-primary my-5">What Clients Say about Us</h2>



//            <Carousel fade className="bg-light">
//   <Carousel.Item className="border shadow-lg">
//   <img
//       className="w-25 "
//       src={review1}
//       alt="First slide"
//     />

//   <Carousel.Caption className="text-primary mx-5 align-items-center ">
//   <h3>About Bangladeshi car</h3>
//       <p>Your service are best and your care are more exported and <br />
//           i also recommended your brand.Your service are best and your
//           <br />
//            care are more exported and
//           i also recommended your brand
//       </p>
//     </Carousel.Caption>
    
    
//   </Carousel.Item>
//   <Carousel.Item className="border shadow-lg">
//   <img
//       className="w-25 d-block img"
//       src={review2}
//       alt="Second slide"
//     />
//   <Carousel.Caption className="text-primary mx-5 align-items-center">
//   <h3>Super brand </h3>
//       <p>Your service are best and your care are more exported and <br />
//           i also recommended your brand.Your service are best and your
//           <br />
//            care are more exported and
//           i also recommended your brand
//       </p>
//     </Carousel.Caption>
    

    
//   </Carousel.Item>
//   <Carousel.Item className="border shadow-lg">
//   <img
//       className="w-25 d-block img"
//       src={review3}
//       alt="Third slide"
//     />
//   <Carousel.Caption className="text-primary mx-5 align-items-center">
//   <h3>About Indian brand</h3>
//       <p>Your service are best and your care are more exported and <br />
//           i also recommended your brand.Your service are best and your
//           <br />
//            care are more exported and
//           i also recommended your brand
//       </p>
//     </Carousel.Caption>
   

   
//   </Carousel.Item>
// </Carousel>
//         </div>
    );
};

export default Review;