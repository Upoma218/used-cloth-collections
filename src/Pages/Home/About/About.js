import React from 'react';
import about from '../../../Assests/Images/about.png';

const About = () => {
    return (
        <div className="hero min-h-screen bg-white" data-aos="fade-up"
        data-aos-duration="3000">
            <div className="hero-content flex-col lg:flex-row">
                <img src={about} className="lg:max-w-sm lg:w-1/2" alt='' />
                <div className='lg:w-1/2 lg:pl-32 text-center  lg:text-left'>
                    <h1 className="text-5xl font-bold ">About Us!</h1>
                    <p className="py-6">We are working with resale products. We collect short time used cloths for resale. Here you can get different type of used cloths! Our products are short time used products and our products quality is also fresh! Because we don't sell any long term used product!</p>
                    <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat">
                            <div className="stat-title">Products</div>
                            <div className="stat-value">10k</div>
                            <div className="stat-desc">Available Now</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Sold</div>
                            <div className="stat-value">50k</div>
                            <div className="stat-desc">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Under Collection Process</div>
                            <div className="stat-value">5k</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;