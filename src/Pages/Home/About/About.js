import React from 'react';
import about from '../../../Assests/Images/about.png';
import TextAnimation from 'react-text-animations';

const About = () => {
    return (
        <div className="hero min-h-screen bg-white" data-aos="fade-up"
            data-aos-duration="3000">
            <div className="hero-content flex-col lg:flex-row">
                <img src={about} className="lg:max-w-sm lg:w-1/2 ease-out-in duration-500  hover:scale-75" alt='' />
                <div className='lg:w-1/2 lg:pl-32 text-center  lg:text-left'>
                    <h1 className="text-5xl ">About Us!</h1>
                    <div className="divider"></div>
                    <p className="py-6">We are working with resale products. We collect short time used cloths for resale. Here you can get different type of used cloths! Our products are short time used products and our products quality is also fresh! Because we don't sell any long term used product!</p>
                    <div className="stats stats-vertical lg:stats-horizontal shadow rounded-none">
                        <div className="stat">
                            <div className="stat-title">Products</div>
                            <div className="stat-value">
                                <TextAnimation.Slide target="10k" text={["11k", "12k", "13k"]}>

                                    10k
                                </TextAnimation.Slide>
                            </div>
                            <div className="stat-desc">Available Now</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Sold</div>
                            <div className="stat-value">
                                <TextAnimation.Slide target="50k" text={["51k", "52k", "53k"]}>

                                    50k
                                </TextAnimation.Slide>
                            </div>
                            <div className="stat-desc">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Under Collection Process</div>
                            <div className="stat-value">
                                <TextAnimation.Slide target="5k" text={["6k", "7k", "8k"]}>

                                    5k
                                </TextAnimation.Slide>
                            </div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;