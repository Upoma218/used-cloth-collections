import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Assests/Images/img1.jpg';
import img2 from '../../Assests/Images/img2.jpg';
import img3 from '../../Assests/Images/img3.jpg';
import img4 from '../../Assests/Images/img4.jpg';

const ShopNow = () => {
    return (
        <div className='pt-12 lg:px-32'data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <h1 className="text-5xl text-center">Our Latest Collections</h1>
            <div className="divider"></div>
            <div className='flex justify-center items-center mb-8'>
                <Link to="/signup"><button className='btn btn-outline rounded-none'>Join With Us</button></Link>
                <Link to="/allProducts"><button className='btn rounded none text-white ml-6'>Shop Now</button></Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-2 lg:gap-2'>
                <div className='grid col-span-2 row-span-2' >
                    <figure><img src={img1} alt="" className='h-full w-full ease-in-out duration-500  hover:scale-75' /></figure>
                </div>
                <div className='grid col-span-4 lg:col-span-2 row-span-2 gap-y-2 lg:gap-2'>
                    <div className='grid col-span-2 row-span-1'>
                        <figure><img src={img2} alt="" className='h-full w-full ease-in-out duration-500  hover:scale-75' /></figure>
                    </div>
                    <div className='grid col-span-4 lg:col-span-2 grid-cols-1 lg:grid-cols-2 row-span-1 gap-y-2 lg:gap-2'>
                        <div className='grid col-span-1'>
                            <figure><img src={img3} alt="" className='h-full w-full ease-in-out duration-500  hover:scale-75' /></figure>
                        </div>
                        <div className='grid col-span-1'>
                            <figure><img src={img4} alt="" className='h-full w-full ease-in-out duration-500  hover:scale-75' /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopNow;