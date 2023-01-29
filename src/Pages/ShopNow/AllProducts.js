import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import BookingModal from '../Shared/BookingModal/BookingModal';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false)
    const [bookings, setBookings] = useState(null);
    useEffect(() => {
        fetch('https://used-cloth-collections-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            {
                products?.length !== 0 && <div className='my-12 lg:px-32 py-12'>
                    <h1 className="text-5xl text-center">All Products</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-24'>
                        {
                            products?.length &&
                            products.map(product =>
                                <div className="card bg-white rounded-none" key={product._id} data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                                        <div>
                                            <figure>
                                                <img src={product?.image} alt="" className="h-72 w-full" onClick={handleClick} />

                                            </figure>
                                            <p className='text-center font-semibold my-6 cursor-pointer' onClick={handleClick} >View Details</p>
                                        </div>
                                        <div className='w-full'>
                                            <button onClick={handleClick}><div className="card-body rounded-none items-center text-center text-xs">
                                                <h2 className="card-title">{product?.title}</h2>
                                                <p className='font-bold '>Product Details : <span className='font-normal'>{product?.details}</span></p>
                                                <p className='font-bold '>Times of Use : <span className='font-normal'>{product?.timesOfUse}</span></p>
                                                <p className='font-bold '>Condition : <span className='font-normal'>{product?.quality}</span></p>
                                                <p className='font-bold '>Original Price : <span className='font-normal'>{product?.originalPrice}</span></p>
                                                <p className='font-bold '>Resale Price : <span className='font-normal'>{product?.resalePrice}</span></p>
                                                <p className='font-bold '>Date of Post : <span className='font-normal'>{product?.postedDate}</span></p>
                                                <div className="card-actions">
                                                    <label
                                                        className="btn text-white btn-sm rounded-none mr-4"
                                                        onClick={() => setBookings(product)}
                                                        htmlFor="booking-modal" >
                                                        BOOK NOW
                                                    </label>

                                                </div>
                                            </div>
                                            </button>
                                        </div>

                                    </ReactCardFlip>


                                </div>)
                        }

                    </div>

                </div>}
            {
                bookings &&
                <BookingModal
                    bookings={bookings} setBookings={setBookings}                               >
                </BookingModal>
            }
        </div>
    );
};

export default AllProducts;