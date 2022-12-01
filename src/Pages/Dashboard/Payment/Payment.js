import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    
    const { originalPrice, title} = booking;
    
    if(navigation.state === 'loading'){
        <Loading></Loading>
    }

    return (
        <div className=''>
            <h1 className='text-2xl mb-6 text-center font-bold'>Payment for {title}</h1>
            <p className=' py-5 rounded font-semibold text-2xl text-yellow-900 text-center'>Please pay <strong>taka {originalPrice}</strong> for your product {title} .</p>
            <div className='w-96 p-4 my-6 shadow-xl bg-white rounded-lg mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking = {booking}/>
                </Elements>
            </div>
        </div>
    );
};


export default Payment;