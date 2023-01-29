import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../Assests/Images/hero.png';
import bcg from '../../../Assests/Images/bcg.jpg';
import TextAnimation from 'react-text-animations';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bcg})`}} data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
            <div className="hero-overlay bg-opacity-70 bg-white"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={hero} className="lg:max-w-sm lg:w-1/2" alt=''data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" />
                <div className='lg:w-1/2 text-center  lg:text-left'>
                    <div className="text-5xl font-bold">
                    <TextAnimation.Slide target="Men's" text={["Men's","Women's","Kid's "]}>
                
                    Flash sale of Men's Used Cloths are running!!
                    </TextAnimation.Slide>
                    </div>
                    
                    <p className="py-8">It's a resale cloths online market. Here you can get different type of used cloths! Our products are short time used products and our products quality is also fresh! Because we don't sell any long term used product!</p>
                    <Link to='about'><button className="btn text-white rounded-none">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;