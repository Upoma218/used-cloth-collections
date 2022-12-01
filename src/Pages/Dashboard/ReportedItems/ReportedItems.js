import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
const ReportedItems = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null)
    }

    const { user } = useContext(AuthContext);

    const { data: reports = [], isLoading, refetch } = useQuery({
        queryKey: ['reports', user?.email],
        queryFn: async () => {
            const res = await fetch('https://used-cloth-collections-server.vercel.app/reported', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })
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

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>Reported Items</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Original Price</th>
                            <th>Category</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports?.length &&
                            reports?.map((report, i) => <tr key={report._id}>
                                <th>{i + 1}</th>
                                <td><div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={report.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{report.title}</div>
                                    </div>
                                </div></td>
                                <td>{report.originalPrice}</td>
                                <td>{report.category}</td>
                                <td><label htmlFor="confirmation-modal" onClick={() => setDeletingProduct(report)} className="btn btn-error btn-xs text-white">Delete</label></td>
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

export default ReportedItems;