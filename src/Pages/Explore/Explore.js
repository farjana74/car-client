import React, { useState,useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Explores from './../Exolores/Explores';
import './Explore.css';

const Explore = () => {
    const [explors,setExplors]=useState([])
    useEffect(()=>{
fetch('https://young-gorge-80259.herokuapp.com/services')
.then(res=>res.json())
.then(data=>setExplors(data))

    },[])
    return (
        <div className="container my-5">
            <h2 className="text-center text-primary">Featured Vehicles</h2>
            <h5  className="text-center my-5 ">That are are have some extra collection for your choicesce happy shooping</h5>

            <Row xs={1} md={3} className="g-4">
           {
               explors.slice(6,18).map(car=><Explores
               
               
                key={car.id}
                car={car}
                ></Explores>)
           }
</Row>
        </div>
    );
};

export default Explore;