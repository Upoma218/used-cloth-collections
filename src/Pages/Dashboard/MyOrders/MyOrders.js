import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://used-cloth-collections-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    // console.log('checking paid bookings',bookings)
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>My Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Original Price</th>
                            <th>Resale Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            bookings?.length &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{booking.title}</div>
                                    </div>
                                </div></td>
                                <td>{booking.originalPrice}</td>
                                <td>{booking.resalePrice}</td>
                                <td>
                                    {
                                        booking.originalPrice && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-xs text-white'>Pay Bill</button></Link>
                                    }
                                    {
                                        booking.originalPrice && booking.paid && <span className='text-green-800'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;