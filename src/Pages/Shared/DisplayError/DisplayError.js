import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const {logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
             })
            .catch(err => console.log(err));
    }
    return (
        <div className='text-center p-40'>
            <p className='text-red-700 p-4 text-5xl font-bold'>Opps!! Something went wrong</p>
            <p className='text-red-700 p-4 text-xl font-bold'>{error.statusText || error.message}</p>
            <h3 className=' p-4 text-3xl font-bold'> <button className='btn btn-info text-white' onClick={handleLogOut}>Logout</button></h3>
        </div>
    );
};

export default DisplayError;