import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <button className="btn text-white btn-circle btn-lg loading"></button>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace>

        </Navigate>
    );
};

export default PrivateRoute;