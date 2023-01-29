import React from 'react';
import { Link } from 'react-router-dom';
import bcg from '../../Assests/Images/cloths.jpg';

const BuyNow = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bcg})` }} data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="hero-overlay bg-opacity-70 bg-rose-100"></div>
            <div className="hero-content text-center">
                <div className=" py-12">
                    <h1 className='text-5xl font-bold'>Do you want to order your preferred cloth?</h1>
                    <Link to="signup">
                        <button className='btn btn-outline font-extrabold mt-12 btn-lg text-3xl shadow-md shadow-neutral-focus rounded-none'>Join Us Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;