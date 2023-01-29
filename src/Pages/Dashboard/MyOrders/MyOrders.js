import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: myBookings = [], isLoading, } = useQuery({
        queryKey: ['myBookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myBookings?email=${user?.email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log('checking paid myBookings',myBookings)
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
                            myBookings?.length &&
                            myBookings?.map((myBooking, i) => <tr key={myBooking._id}>
                                <th>{i + 1}</th>
                                <td><div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myBooking.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{myBooking.title}</div>
                                    </div>
                                </div></td>
                                <td>{myBooking.originalPrice}</td>
                                <td>{myBooking.resalePrice}</td>
                                <td>
                                    {
                                        myBooking.originalPrice && !myBooking.paid &&
                                        <Link to={`/dashboard/payment/${myBooking._id}`}><button className='btn text-white btn text-white-xs text-white'>Pay Bill</button></Link>
                                    }
                                    {
                                        myBooking.originalPrice && myBooking.paid && <span className='text-green-800'>Paid</span>
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