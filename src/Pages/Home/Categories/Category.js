import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const products = useLoaderData();
    console.log(products)


    return (
        <div className='my-12 px-6 md:px-24 lg:px-40'data-aos="zoom-in-down">
            <h1 className="text-5xl font-bold text-center">Product Categories</h1>
            <div className='grid grid-cols-1 gap-8 mt-12'>
                {
                    products?.length &&
                    products.map(product => <CategoryCard key={product._id} product={product}></CategoryCard>

                    )
                }
            </div>

        </div>
    );
};

export default Category;