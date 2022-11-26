import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AllSellers = email => {
    
    const { user } = useContext(AuthContext);
    const url = 'http://localhost:5000/users/sellers?role=Seller';

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers', user?.email],
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

    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Verification</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers &&
                            sellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.phone}</td>
                                <td>{seller.location}</td>
                                <td><button className="btn btn-xs text-white">Verify</button></td>
                                <td><button className="btn btn-error btn-xs text-white">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;