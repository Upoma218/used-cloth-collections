import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ClientsReview = () => {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div className=' lg:px-32 bg-white py-24' data-aos="fade-up"
            data-aos-duration="3000">
            <h1 className="text-5xl text-center">What Our Customers Say About Us!</h1>
            <div className="divider"></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-24'>
                {
                    reviews?.length && reviews.map(review =>
                        <div className="card  rounded-none border-2" key={review._id}>
                            <figure className="avatar mt-6">
                                <div className="w-16 rounded-full">
                                    <img src={review.image} alt="" />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{review.name}!</h2>
                                <p>"{review.text}"</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='lg:px-80'>
                <Link to="/addReview"><button className='btn btn-outline w-full mt-12 font-bold rounded-none'>Add Your Review</button></Link>
            </div>
        </div>
    );
};

export default ClientsReview;