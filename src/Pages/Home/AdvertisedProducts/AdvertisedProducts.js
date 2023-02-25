import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useState } from 'react';
// import ReactCardFlip from 'react-card-flip';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AdvertisedProducts = () => {
    // const [isFlipped, setIsFlipped] = useState(false)
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
    // const handleClick = () => {
    //     setIsFlipped(!isFlipped);
    // }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            {
                products?.length !== 0 && <div className='my-12 lg:px-32 py-12'>
                    <h1 className="text-5xl text-center">Advertised Products</h1>
                    <div className="divider"></div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-24'>
                        {
                            products?.length &&
                            products.map(product =>
                                <div className="card bg-white rounded-none relative" key={product._id} data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
                                    <figure>
                                        <img src={product.image} alt="" className="h-72 w-full object-fit : cover"/*  onClick={handleClick}  *//>

                                    </figure>
                                        <div className="card-body hover:w-full hover:h-full
                                         absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-4 opacity-0 transition-all duration-300 hover:opacity-100 hover:translate-y-0">
                                            <h2 className="text-center font-bold">{product.title}</h2>
                                            <p className='font-bold '>Product Details : <span className='font-normal'>{product.details}</span></p>
                                            <p className='font-bold '>Times of Use : <span className='font-normal'>{product.timesOfUse}</span></p>
                                            <p className='font-bold '>Condition : <span className='font-normal'>{product.quality}</span></p>
                                            <p className='font-bold '>Original Price : <span className='font-normal'>{product.originalPrice}</span></p>
                                            <p className='font-bold '>Resale Price : <span className='font-normal'>{product.resalePrice}</span></p>
                                            <p className='font-bold '>Date of Post : <span className='font-normal'>{product.postedDate}</span></p>
                                        </div>

                                    {/* </ReactCardFlip> */}


                                </div>)
                        }

                    </div>
                </div>}
        </div>
    );
};

export default AdvertisedProducts;