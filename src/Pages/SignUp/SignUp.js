import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }
    const handleSignUp = data => {
        setSignUpError('');
        createUser(data.email, data.password )
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('Registration successful')
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role, data.phone, data.location)
                        // console.log(data.name, data.email, data.role)
                    })

                    .catch(error => console.error(error))
            })
            .catch(error => {
                setSignUpError(error.message);
            })
    }

    const saveUser = (name, email, role, phone, location) => {
        const user = { name, email, role, phone, location };
        console.log(user)
        fetch('https://used-cloth-collections-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json()
                .then(data => {
                    setCreatedUserEmail(email)
                }))
    }
    return (
        <div className='h-[800px] flex justify-center items-center border '>
            <div className='w-96 p-7 rounded-2xl shadow-xl bg-white'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full min-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full min-w-xs" />
                        {errors.name && <p className='text-red-600 py-3'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full min-w-xs">
                        <label className="label"> <span className="label-text">Phone Number</span></label>
                        <input type="text" {...register("phone", {
                            required: "Phone number is Required"
                        })} className="input input-bordered w-full min-w-xs" />
                        {errors.phone && <p className='text-red-600 py-3'>{errors.phone.message}</p>}
                    </div>
                    <div className="form-control w-full min-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Location is Required"
                        })} className="input input-bordered w-full min-w-xs" />
                        {errors.location && <p className='text-red-600 py-3'>{errors.location.message}</p>}
                    </div>
                    
                    <div className="form-control w-full min-w-xs">
                        <label className="label"> <span className="label-text">User Type</span></label>
                        <select name='role' className="select select-bordered"{...register("role", {
                            required: "Select user type is Required"
                        })}>
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>
                    <div className="form-control w-full min-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"{...register('email', {
                            required: "Email is required"
                        })} className="input input-bordered w-full min-w-xs" />
                        {errors.email && <p className='text-red-600 py-3'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full min-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"{...register('password', {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password should be minimum 6 character long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])./, message: "Password must be included with minimum 1 uppercase, 1 lowercase, 1 digit and 1 special character" }
                        })}
                            className="input input-bordered w-full min-w-xs mb-5" />
                        {errors.password && <p className='text-red-600 my-2'>{errors.password.message}</p>}
                    </div>
                    <input className='btn text-white w-full' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600 py-3'>{signUpError}</p>}
                </form>
                <p className='my-3'>Already have an account? <Link className='text-info' to="/login">Login Now</Link></p>
            </div>
        </div>
    );
};

export default SignUp;