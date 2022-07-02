import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Explores from './../Exolores/Explores';
import './Explore.css';
import { Triangle } from 'react-loader-spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Explore = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const [explors, setExplors] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://young-gorge-80259.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setExplors(data))
            .finally(() => setIsLoading(false))

    }, [])
    if (isLoading) {
        return <div className="d-flex align-items-center justify-content-center py-5" >
            <Triangle ariaLabel="loading-indicator" />
            Please wait...
        </div>
    }
    return (
        <div className='container-fluid'>

            <div className="container my-5">
                <h2 className="text-center text-primary">Featured Vehicles</h2>
                <h5 className="text-center my-5 ">That are are have some extra collection for your choicesce happy shooping</h5>

                <Row xs={1} md={3} className="g-4">
                    {
                        explors.slice(6, 18).map(car => <Explores


                            key={car.id}
                            car={car}
                        ></Explores>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Explore;