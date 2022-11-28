import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const products = useLoaderData();
    console.log(products)
 

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