import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';


const AddProducts = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_imageBB_key;

    const navigate = useNavigate();
    const navigation = useNavigation();
    const [seller, setSeller] = useState(null);

    useEffect(() => {
        fetch(`https://used-cloth-collections-server.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => setSeller(data))

    },[user.email])

    const handleAddProduct = data => {
        const image = data.image[0];
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
                    console.log(imgData.data.url);
                    const product = {
                        title: data.title,
                        category: data.category,
                        location: data.location,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        timesOfUse: data.timesOfUse,
                        postedDate: data.postedDate,
                        sellersName: data.sellersName,
                        phone: data.phone,
                        details: data.details,
                        quality: data.quality,
                        email: data.email,
                        image: imgData.data.url
                    }


                    fetch('https://used-cloth-collections-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Product added successfully`);
                            navigate('/dashboard/myProducts')
                        })
                }
            })
    }

    if(navigation.state === 'loading'){
        <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-2xl font-bold text-center mb-6'>Add Products</h1>
            <div>
                <div className='p-7 rounded-2xl bg-white lg:mx-auto'>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("title", {
                                required: "Product Name is Required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Enter Your Product Name' />
                            {errors.title && <p className='text-red-600 py-3'>{errors.title.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Select Product Category</span></label>
                            <select name='category' className="select select-bordered mt-5"{...register("category", {
                                required: "Product Category is Required"
                            })}>
                                <option selected>Men's Cloth</option>
                                <option>Women's Cloth</option>
                                <option>Kid's Cloth</option>
                            </select>
                            {errors.category && <p className='text-red-600 py-3'>{errors.category.message}</p>}
                        </div>
                        {
                            seller && <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Your Location</span></label>
                            <input type="text"{...register('location', {
                                required: "Location is required"
                            })} className="input input-bordered w-full min-w-xs" value={seller.location} readOnly />
                            {errors.location && <p className='text-red-600 py-3'>{errors.location.message}</p>}
                        </div>
                        }
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Original Price</span></label>
                            <input type="text"{...register('originalPrice', {
                                required: "Original price is required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Products Original Price' />
                            {errors.originalPrice && <p className='text-red-600 py-3'>{errors.originalPrice.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Resale Price</span></label>
                            <input type="text"{...register('resalePrice', {
                                required: "Resale price is required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Resale Price' />
                            {errors.resalePrice && <p className='text-red-600 py-3'>{errors.resalePrice.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Times of Use</span></label>
                            <input type="text"{...register('timesOfUse', {
                                required: "Times of Use is required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Times of Use' />
                            {errors.timesOfUse && <p className='text-red-600 py-3'>{errors.timesOfUse.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Posted Date</span></label>
                            <input type="text"{...register('postedDate', {
                                required: "Posted Date is required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Posted Date' />
                            {errors.postedDate && <p className='text-red-600 py-3'>{errors.postedDate.message}</p>}
                        </div>
                        {
                            seller && <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Your Name</span></label>
                            <input type="text"{...register('sellersName', {
                                required: "Name is required"
                            })} className="input input-bordered w-full min-w-xs" value={seller.name} readOnly />
                            {errors.sellersName && <p className='text-red-600 py-3'>{errors.sellersName.message}</p>}
                        </div>
                        }
                        {
                            seller && 
                            <div className="form-control w-full min-w-xs">
                            <label className="label"><span className="label-text">Phone Number</span></label>
                            <input type="text"{...register('phone', {
                                required: "Phone Number is required"
                            })} className="input input-bordered w-full min-w-xs" value={seller.phone}  readOnly/>
                            {errors.phone && <p className='text-red-600 py-3'>{errors.phone.message}</p>}
                        </div>
                        }
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="text"{...register('email', {
                                required: "Email is required"
                            })} className="input input-bordered w-full min-w-xs" value={user?.email} readOnly/>
                            {errors.email && <p className='text-red-600 py-3'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Product Details</span></label>
                            <input type="text"{...register('details', {
                                required: "Product Details is required"
                            })} className="input input-bordered w-full min-w-xs" placeholder='Product Details' />
                            {errors.details && <p className='text-red-600 py-3'>{errors.details.message}</p>}
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <label className="label"> <span className="label-text">Product Quality</span></label>
                            <select name='quality' className="select select-bordered mt-5"{...register("quality", {
                                required: "Product Quality is Required"
                            })}>
                                <option selected>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div className="form-control w-full min-w-xs mt-5">
                            <label className="label"> <span className="label-text"></span></label>
                            <input type='file' {...register("image", {
                                required: "Photo is Required"
                            })} className="input input-bordered border-dashed w-full min-w-xs p-2" placeholder='Upload Your Photo' />
                            {errors.image && <p className='text-red-600 py-3'>{errors.image.message}</p>}
                        </div>
                        <input className='btn mt-5 w-full text-white' value="Add Product" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;