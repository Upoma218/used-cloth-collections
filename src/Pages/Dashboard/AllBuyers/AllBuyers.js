import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {

    const [deletingBuyer, setDeletingBuyer] = useState(null);
    const closeModal = () => {
        setDeletingBuyer(null)
    }
    const { user } = useContext(AuthContext);
    const url = 'https://used-cloth-collections-server.vercel.app/buyerUser';

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();

            return data;

        }
    })

    const handleDeleteBuyer = seller => {
        fetch(`https://used-cloth-collections-server.vercel.app/users/${seller._id}`, {
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
                    toast.success(`Buyer ${seller.name} deleted successfully`)
                }
                console.log(data)
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>All Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.length &&
                            buyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.phone}</td>
                                <td>{buyer.location}</td>
                                <td><label  htmlFor="confirmation-modal" onClick={() => setDeletingBuyer(buyer)} className="btn btn-error btn-xs text-white">Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={`Are you sure about deleting this Seller?`}
                    message={`If you delete once, ${deletingBuyer.name} will be permanently deleted!`}
                    closeModal={closeModal}
                    successAction={handleDeleteBuyer}
                    modalData={deletingBuyer}
                    buttonName="Delete">
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;
