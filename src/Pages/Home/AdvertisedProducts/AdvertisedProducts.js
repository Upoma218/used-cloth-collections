import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AdvertisedProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [], isLoading, refetch } = useQuery({

        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch('https://used-cloth-collections-server.vercel.app/advertised', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            refetch()
            return data;

        }
    })
    console.log(products)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                products?.length !== 0 && <div className='my-12 lg:px-32'>
                    <h1 className="text-5xl font-bold text-center">Advertised Products</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8'>
                        {
                            products?.length &&
                            products.map(product =>
                                <div className="card shadow-xl bg-base-content text-white" key={product._id}>
                                    <figure className="px-10 pt-10">
                                        <img src={product.image} alt="" className="rounded-xl h-72 w-72" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{product.title}</h2>
                                        <p className='font-bold '>Product Details : <span className='font-normal'>{product.details}</span></p>
                                        <p className='font-bold '>Times of Use : <span className='font-normal'>{product.timesOfUse}</span></p>
                                        <p className='font-bold '>Condition : <span className='font-normal'>{product.quality}</span></p>
                                        <p className='font-bold '>Original Price : <span className='font-normal'>{product.originalPrice}</span></p>
                                        <p className='font-bold '>Resale Price : <span className='font-normal'>{product.resalePrice}</span></p>
                                        <p className='font-bold '>Date of Post : <span className='font-normal'>{product.postedDate}</span></p>
                                    </div>
                                </div>)
                        }

                    </div>
                </div>}
        </div>
    );
};

export default AdvertisedProducts;