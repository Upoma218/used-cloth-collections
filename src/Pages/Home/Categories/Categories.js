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
        <div className='lg:px-32 bg-white py-24'data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <h1 className="text-5xl font-bold text-center">Product Categories</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-24'data-aos="fade-up"
        data-aos-duration="3000">
            {
                categories &&
                categories.map(category =>
                    <div className="card rounded-none border-2" key={category._id}>
                        <figure>
                            <img src={category.image} alt="" className="h-60 w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{category.category}</h2>
                            <div className="card-actions">
                                <Link to={`/categories/${category._id}`}>
                                    <button className="btn text-white btn-sm mt-4 rounded-none">View All</button>
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