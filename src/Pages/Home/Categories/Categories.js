import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    return (
        <div className='my-12 lg:px-32'>
            <h1 className="text-5xl font-bold text-center">Product Categories</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8'>
                {
                    categories &&
                    categories.map(category =>
                        <div className="card shadow-xl bg-base-content text-white" key={category._id}>
                            <figure className="px-10 pt-10">
                                <img src={category.image} alt="" className="rounded-xl h-72 w-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{category.category}</h2>
                                <div className="card-actions">
                                    <Link to={`/categories/${category._id}`}>
                                        <button className="btn glass btn-sm mt-4">View All</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Categories;