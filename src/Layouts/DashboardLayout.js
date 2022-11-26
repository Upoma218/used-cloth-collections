import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import bg from '../Assests/Images/bg.jpg'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const menuItems = <>
     <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
                            </>
                        }
    </>
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile -pl-8">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pt-10 px-16"style={{ backgroundImage: `url(${bg})` }}>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu pl-28 pt-6 hover-bordered bg-base-content w-80 text-white font-semibold text-xl">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;