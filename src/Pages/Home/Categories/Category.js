// import { useQuery } from '@tanstack/react-query';
import React/* , { useContext } */ from 'react';
import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../../Context/AuthProvider';
// import Loading from '../../Shared/Loading/Loading';
import CategoryCard from './CategoryCard';

const Category = () => {
    const products = useLoaderData();
   /*  console.log(products)
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/sellerUser/${id}`;

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            refetch();
            return data;

        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
 */

    return (
        <div className='my-12 lg:px-60'>
            <h1 className="text-5xl font-bold text-center">Product Categories</h1>
            <div className='grid grid-cols-1 mt-12'>
                {
                    products?.length &&
                    products.map(product =><CategoryCard key={product._id} product={product}></CategoryCard>
                        
                        )
                }
            </div>

        </div>
    );
};

export default Category;