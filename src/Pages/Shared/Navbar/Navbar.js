import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assests/Icons/logo.png';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/allProducts'>Shop</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li>
            {
                user?.uid ?
                    <>
                        <button onClick={handleLogOut}>Logout</button>
                    </>
                    :
                    <Link to='/login'>Login</Link>

            }
             <Link to='/dashboard'>Dashboard</Link>
        </li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start lg:pl-32">
                <div className="dropdown">
                    <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 navbar-end">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn text-white btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className=" hidden lg:flex lg:pr-32">
                <ul className="menu menu-horizontal p-0 navbar-end">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="navbar-end mr-5 btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;