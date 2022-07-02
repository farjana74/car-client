import React, { useEffect } from 'react';
import "./WhyCarPortal.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyCarPortal = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (

        <div data-aos="fade-up" className='container-fluid py-5'  >
            <div className='container danapuriOffers-bg  position-relative mx-auto text-start '
            >
                {/* <img className='' src={whyDanapuri.image_url} alt="" /> */}
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-7 col-lg-7'>

                    </div>
                    <div className='col-12 col-sm-12 col-md-5 col-lg-5  whyDanaPuri-card  text-white     '>
                        <h2 className='whyDanapuri-title '>Why At CarPortal</h2>
                        <p className='whyDanapuri-description '>We are building the foundation for secured Identity Management by embracing the latest technologies such as blockchain, cryptographic verification technologies and physical biometric verifications. We aim to revolutionise trusted physical identity transforming it into secured digital identification credentials by developing trusted, inclusive and sustainable solutions. Danapuri has a proven track ...</p>
                        <button className=' button-text '>Read More</button>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default WhyCarPortal;