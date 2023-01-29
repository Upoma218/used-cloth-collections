import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const imageHostKey = process.env.REACT_APP_imageBB_key;
    const navigate = useNavigate();


    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.files[0];
        const name = form.name.value;
        const text = form.text.value;
        const ratings = form.rating.value;
        // console.log(image, name, text)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const review = {
                        name: name,
                        image: imgData.data.url,
                        text: text,
                        ratings: ratings,
                    }
                    fetch('https://used-cloth-collections-server.vercel.app/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast('Review added successfully!');
                                form.reset();
                                navigate('/')
                            }
                            console.log(data);
                        })
                }
                console.log(imgData)
            })
            .catch(error => console.log(error))


    }
    return (
        <form onSubmit={handleAddReview} className="bg-white shadow-xl rounded-3 m-12 p-6 lg:p-24 lg:mx-60">
            <div>
                <label>
                    <h1 className=''>Your Name</h1>
                </label>
                <input type="text" name='name' placeholder='Your Name' required className='input input-bordered w-full my-3 p-4 rounded-none' />
            </div>
            <div>
                <label>
                    <h1 className=''>Your Photo</h1>
                </label>
                <input type="file" name='image' placeholder='Your Photo' className='input input-bordered w-full my-3 p-4 rounded-none' />
            </div>
            <div>
                <label>
                    <h1 className=''>Your Review</h1>
                </label>
                <input type="text" name='text' placeholder='Your Review' className='input input-bordered w-full my-3 p-4 rounded-none' />
            </div>
            <input type="submit" value="Add Review" className='btn text-white w-full my-5 rounded-none' />
        </form>
    );
};

export default AddReview;