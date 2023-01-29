import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import verified from '../../../Assests/Icons/verified.png';

const AllSellers = email => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const closeModal = () => {
        setDeletingSeller(null)
    }

    const { user } = useContext(AuthContext);

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers', user?.email],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellerUser', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })


    const handleVerifySeller = _id => {
        fetch(`http://localhost:5000/users/Sellers/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(' Seller verified successfully');
                    refetch();
                }
            })
    }

    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller ${seller.name} deleted successfully`)
                }
                console.log(data)
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>All Sellers</h1>
            <div className="overflow-x-auto"data-aos="zoom-out-left">
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
                            sellers?.length &&
                            sellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className='flex items-center'>
                                        {seller.name}{
                                            seller.verification === 'verified' &&
                                            <img src={verified} alt="" className='w-4 h-4 ml-2' />
                                        }
                                    </div>
                                </td>
                                <td>{seller.email}</td>
                                <td>{seller.phone}</td>
                                <td>{seller.location}</td>
                                <td>
                                    {
                                        seller.verification !== 'verified' &&
                                        <label className="btn text-white btn-xs" onClick={() => handleVerifySeller(seller._id)}>Verify</label>
                                    }
                                </td>
                                <td><label htmlFor="confirmation-modal" onClick={() => setDeletingSeller(seller)} className="btn text-white btn-error btn-xs">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure about deleting this Seller?`}
                    message={`If you delete once, ${deletingSeller.name} will be permanently deleted!`}
                    closeModal={closeModal}
                    successAction={handleDeleteSeller}
                    modalData={deletingSeller}
                    buttonName="Delete">
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;