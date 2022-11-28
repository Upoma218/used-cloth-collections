import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import verified from '../../../Assests/Icons/verified.png';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import Loading from '../../Shared/Loading/Loading';

const CategoryCard = ({ product }) => {
    const [bookings, setBookings] = useState(null);
    const { email, title, image, details, timesOfUse, quality, originalPrice, resalePrice, postedDate, sellersName, phone, location} = product;
    console.log(bookings)
    // console.log(email)

    const { data: dbUserNew = [], isLoading, refetch } = useQuery({
        queryKey: ['userDB', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/userEmail?email=${email}`)
            const data = await res.json()
            return data;
        }
    })

    
    // console.log(dbUserNew[0]);

    const handleReport = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(' Product Reported Successfully');
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="card lg:card-side bg-base-content shadow-xl my-12 p-6" key={product._id}>
            <figure><img src={image} alt="Album" className='w-96 h-full' /></figure>
            <div className="card-body  text-white ml-12">
                <h2 className="text-2xl mb-6 font-bold">Product Name :  {title}</h2>
                <p className='font-bold '>Product Details : <span className='font-normal'>{details}</span></p>
                <p className='font-bold '>Times of Use : <span className='font-normal'>{timesOfUse}</span></p>
                <p className='font-bold '>Condition : <span className='font-normal'>{quality}</span></p>
                <p className='font-bold '>Original Price : <span className='font-normal'>{originalPrice}</span></p>
                <p className='font-bold '>Resale Price : <span className='font-normal'>{resalePrice}</span></p>
                <p className='font-bold '>Date of Post : <span className='font-normal'>{postedDate}</span></p>
                <p className='font-bold flex items-center'>Seller's Name : <span className='font-normal ml-2 flex items-center'>
                    {sellersName}
                    {
                        dbUserNew[0]?.verification === 'verified' &&
                        <img src={verified} alt="" className='w-4 h-4 ml-2' />
                    }
                </span></p>
                <p className='font-bold '>Contact No : <span className='font-normal'>{phone}</span></p>
                <p className='font-bold '>Location : <span className='font-normal'>{location}</span></p>
                <div className='mt-5'>
                    <div className="card-actions">
                        {
                            dbUserNew[0]?.verification === 'verified' &&
                            <label
                                className="btn glass btn-sm"
                                onClick={() => setBookings(product)}
                                htmlFor="booking-modal" >
                                BOOK NOW
                            </label>
                        }

                    </div>
                    <button onClick={() => handleReport(product._id)} className="btn btn-sm glass mt-5">Report</button>
                </div>
            </div>
            {
                bookings &&
                <BookingModal
                    bookings={bookings} setBookings={setBookings} refetch={refetch} product={product}
                >
                </BookingModal>
            }
        </div>
    );
};

export default CategoryCard;