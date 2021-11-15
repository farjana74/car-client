import React from 'react';
import './Banner.css';


import vec2 from '../../../images/vector 1 (3).jpg'



const Banner = () => {
    return (
        <div className="container  banner ">
          <div className="row my-5 mx-auto ">
            <div className="col-md-5   ">
              <h2 className="fs-1 fw-bold fst-italic   " >Welcome to our most imported car</h2>
              <p className="fs-4 text-muted fst-italic my-5">Say hello to our most imported car plateform at any resonavle price Make we are ensure that our car quality </p>
             
            </div>

            <div className="col-md-6 align-items-center justify-content-center">
<img  className="w-100 opacity-75" src={vec2} alt="" />
            </div>
          </div>

        </div>
    );
};

export default Banner;