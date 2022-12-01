import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../Assests/Images/hero.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={hero} className="max-w-sm lg:w-1/2 " alt=''/>
                <div className='lg:w-1/2 '>
                    <h1 className="text-5xl font-bold">Flash sale of <br /> used cloths is running!!</h1>
                    <p className="py-8">It's resale cloths online market. Here you can get different type of used cloths! Our products are short time used products and our products quality is also fresh! Because we don't sell any long term used product!</p>
                    <Link to='about'><button className="btn text-white">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;