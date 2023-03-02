import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from '../Shared/BookingModal/BookingModal';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [bookings, setBookings] = useState(null);
    useEffect(() => {
        fetch('https://used-cloth-collections-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
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
                                <div className="card bg-white rounded-none relative" key={product._id} data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                        <div>
                                            <figure>
                                                <img src={product?.image} alt="" className="h-72 w-full" />

                                            </figure>
                                        </div>
                                        <div className='w-full'><div className="rounded-none items-center  text-xs card-body hover:w-full hover:h-full
                                         absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-4 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-0">
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
                                        </div>


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