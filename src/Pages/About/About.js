import React, { useEffect } from 'react';
import home3 from '../../images/home3-banner1.jpg'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className="container my-5">
            <div className="row ">
                <div data-aos="fade-right" className="col-md-5 mx-auto">
                    <img src={home3} className="w-100" alt="" />
                </div>
                <div data-aos="fade-left" className="col-md-5">
                    <h2 className="text-muted fs-1">Quality cars with affordable prices</h2>
                    <span>DISCOVER THEM NOW</span>
                    <p className="fs-4 text-muted fst-italic my-5">Our company was built by trust and reputation. We know how to make our customers love us by our high quality products with affordable prices. We promise to make you have the interesting experiences</p>
                    <Link to="/explore"><button type="button" class="btn btn-primary btn-lg">Details cars</button></Link>
                </div>
            </div>

        </div>
    );
};

export default About;