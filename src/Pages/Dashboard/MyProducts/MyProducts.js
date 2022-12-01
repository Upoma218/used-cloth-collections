import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null)
    }

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://used-cloth-collections-server.vercel.app/myProducts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('https://used-cloth-collections-server.vercel.app/bookings', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log('checking paid bookings',bookings)
    const handleDeleteProduct = product => {
        fetch(`https://used-cloth-collections-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product deleted successfully`)
                }
                console.log(data)
            })
    }
    const handleAdvertise = id => {
        fetch(`https://used-cloth-collections-server.vercel.app/advertised/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(' Product advertised Successfully');
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>My Products</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sales Status</th>
                            <th>Advertisement</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts &&
                            myProducts?.map((myProduct, i) => <tr key={myProduct._id}>
                                <th>{i + 1}</th>
                                <td><div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myProduct.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{myProduct.title}</div>
                                    </div>
                                </div></td>
                                <td>{myProduct.originalPrice}</td>
                                <td><button className='btn btn-xs text-white'>Available</button></td>
                                <td><button className='btn btn-xs text-white'onClick={() => handleAdvertise(myProduct._id)}>Advertise</button></td>
                                
                                
                              {/*   <td>
                                    {
                                        bookings && bookings.map(booking => <span key={booking.key}>
                                            {
                                                booking.originalPrice && !booking.paid &&
                                                <button className='btn btn-xs text-white'>Advertise</button>
                                            }
                                            
                                        </span>)
                                    }
                                </td> */}
                                <td>
                                    <label htmlFor="confirmation-modal" onClick={() => setDeletingProduct(myProduct)} className="btn btn-error btn-xs text-white">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                {
                    deletingProduct && <ConfirmationModal
                        title={`Are you sure about deleting this Product?`}
                        message={`If you delete once, ${deletingProduct.name} will be permanently deleted!`}
                        closeModal={closeModal}
                        successAction={handleDeleteProduct}
                        modalData={deletingProduct}
                        buttonName="Delete">
                    </ConfirmationModal>
                }

            </div>
        </div>
    );
};

export default MyProducts;